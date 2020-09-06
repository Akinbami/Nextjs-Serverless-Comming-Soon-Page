"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const prerender_manifest_json_1 = __importDefault(require("./prerender-manifest.json"));
const manifest_json_1 = __importDefault(require("./manifest.json"));
const routes_manifest_json_1 = require("./routes-manifest.json");
const next_aws_cloudfront_1 = __importDefault(require("@sls-next/next-aws-cloudfront"));
const s3_1 = __importDefault(require("aws-sdk/clients/s3"));
const perf_hooks_1 = require("perf_hooks");
const perfLogger = (logLambdaExecutionTimes) => {
    if (logLambdaExecutionTimes) {
        return {
            now: () => perf_hooks_1.performance.now(),
            log: (metricDescription, t1, t2) => {
                if (!t1 || !t2)
                    return;
                console.log(`${metricDescription}: ${t2 - t1} (ms)`);
            }
        };
    }
    return {
        now: () => 0,
        log: () => { }
    };
};
const addS3HostHeader = (req, s3DomainName) => {
    req.headers["host"] = [{ key: "host", value: s3DomainName }];
};
const isDataRequest = (uri) => uri.startsWith("/_next/data");
const normaliseUri = (uri) => {
    if (routes_manifest_json_1.basePath) {
        if (uri.startsWith(routes_manifest_json_1.basePath)) {
            uri = uri.slice(routes_manifest_json_1.basePath.length);
        }
        else {
            return "/404";
        }
    }
    if (uri.endsWith("/")) {
        uri = uri.slice(0, -1);
    }
    return uri === "" ? "/" : uri;
};
const normaliseS3OriginDomain = (s3Origin) => {
    if (s3Origin.region === "us-east-1") {
        return s3Origin.domainName;
    }
    if (!s3Origin.domainName.includes(s3Origin.region)) {
        const regionalEndpoint = s3Origin.domainName.replace("s3.amazonaws.com", `s3.${s3Origin.region}.amazonaws.com`);
        return regionalEndpoint;
    }
    return s3Origin.domainName;
};
const router = (manifest) => {
    const { pages: { ssr, html } } = manifest;
    const allDynamicRoutes = Object.assign(Object.assign({}, ssr.dynamic), html.dynamic);
    return (uri) => {
        let normalisedUri = uri;
        if (isDataRequest(uri)) {
            normalisedUri = uri
                .replace(`/_next/data/${manifest.buildId}`, "")
                .replace(".json", "");
            normalisedUri = ["/index", ""].includes(normalisedUri)
                ? "/"
                : normalisedUri;
        }
        if (ssr.nonDynamic[normalisedUri]) {
            return ssr.nonDynamic[normalisedUri];
        }
        for (const route in allDynamicRoutes) {
            const { file, regex } = allDynamicRoutes[route];
            const re = new RegExp(regex, "i");
            const pathMatchesRoute = re.test(normalisedUri);
            if (pathMatchesRoute) {
                return file;
            }
        }
        if (html.nonDynamic["/404"] !== undefined) {
            return "pages/404.html";
        }
        return "pages/_error.js";
    };
};
exports.handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const manifest = manifest_json_1.default;
    let response;
    const prerenderManifest = prerender_manifest_json_1.default;
    const { now, log } = perfLogger(manifest.logLambdaExecutionTimes);
    const tHandlerBegin = now();
    if (isOriginResponse(event)) {
        response = yield handleOriginResponse({
            event,
            manifest,
            prerenderManifest
        });
    }
    else {
        response = yield handleOriginRequest({
            event,
            manifest,
            prerenderManifest
        });
    }
    const tHandlerEnd = now();
    log("handler execution time", tHandlerBegin, tHandlerEnd);
    return response;
});
const handleOriginRequest = ({ event, manifest, prerenderManifest }) => __awaiter(void 0, void 0, void 0, function* () {
    const request = event.Records[0].cf.request;
    const uri = normaliseUri(request.uri);
    const { pages, publicFiles } = manifest;
    const isPublicFile = publicFiles[uri];
    const isDataReq = isDataRequest(uri);
    let newUri = request.uri;
    if (isDataReq || isPublicFile) {
        if (newUri.endsWith("/")) {
            newUri = newUri.slice(0, -1);
        }
    }
    else if (request.uri !== "/" && request.uri !== "" && uri !== "/404") {
        const trailingSlash = manifest.trailingSlash;
        if (!trailingSlash && newUri.endsWith("/")) {
            newUri = newUri.slice(0, -1);
        }
        if (trailingSlash && !newUri.endsWith("/")) {
            newUri += "/";
        }
    }
    if (newUri !== request.uri) {
        return createRedirectResponse(newUri, request.querystring);
    }
    const isStaticPage = pages.html.nonDynamic[uri];
    const isPrerenderedPage = prerenderManifest.routes[uri];
    const origin = request.origin;
    const s3Origin = origin.s3;
    const isHTMLPage = isStaticPage || isPrerenderedPage;
    const normalisedS3DomainName = normaliseS3OriginDomain(s3Origin);
    const hasFallback = hasFallbackForUri(uri, prerenderManifest);
    const { now, log } = perfLogger(manifest.logLambdaExecutionTimes);
    s3Origin.domainName = normalisedS3DomainName;
    S3Check: if (isHTMLPage || isPublicFile || hasFallback || isDataReq) {
        if (isHTMLPage || hasFallback) {
            s3Origin.path = `${routes_manifest_json_1.basePath}/static-pages`;
            const pageName = uri === "/" ? "/index" : uri;
            request.uri = `${pageName}.html`;
        }
        if (isPublicFile) {
            s3Origin.path = `${routes_manifest_json_1.basePath}/public`;
            if (routes_manifest_json_1.basePath) {
                request.uri = request.uri.replace(routes_manifest_json_1.basePath, "");
            }
        }
        if (isDataReq) {
            const pagePath = router(manifest)(uri);
            if (pagePath === "pages/404.html") {
                s3Origin.path = `${routes_manifest_json_1.basePath}/static-pages`;
                request.uri = pagePath.replace("pages", "");
            }
            else if (pagePath === "pages/_error.js") {
                break S3Check;
            }
        }
        addS3HostHeader(request, normalisedS3DomainName);
        return request;
    }
    const pagePath = router(manifest)(uri);
    if (pagePath.endsWith(".html")) {
        s3Origin.path = `${routes_manifest_json_1.basePath}/static-pages`;
        request.uri = pagePath.replace("pages", "");
        addS3HostHeader(request, normalisedS3DomainName);
        return request;
    }
    const tBeforePageRequire = now();
    let page = require(`./${pagePath}`);
    const tAfterPageRequire = now();
    log("require JS execution time", tBeforePageRequire, tAfterPageRequire);
    const tBeforeSSR = now();
    const { req, res, responsePromise } = next_aws_cloudfront_1.default(event.Records[0].cf);
    try {
        if (pagePath === "pages/_error.js") {
            res.statusCode = 404;
        }
        yield page.render(req, res);
    }
    catch (error) {
        console.error(`Error rendering page: ${pagePath}. Error:\n${error}\nRendering Next.js error page.`);
        res.statusCode = 500;
        page = require("./pages/_error.js");
        yield page.render(req, res);
    }
    const response = yield responsePromise;
    const tAfterSSR = now();
    log("SSR execution time", tBeforeSSR, tAfterSSR);
    setCloudFrontResponseStatus(response, res);
    return response;
});
const handleOriginResponse = ({ event, manifest, prerenderManifest }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const response = event.Records[0].cf.response;
    const request = event.Records[0].cf.request;
    const { status } = response;
    if (status !== "403") {
        if (request.uri === "/404.html") {
            response.status = "404";
            response.statusDescription = "Not Found";
        }
        return response;
    }
    const uri = normaliseUri(request.uri);
    const { domainName, region } = request.origin.s3;
    const bucketName = domainName.replace(`.s3.${region}.amazonaws.com`, "");
    const s3 = new s3_1.default({ region: (_b = (_a = request.origin) === null || _a === void 0 ? void 0 : _a.s3) === null || _b === void 0 ? void 0 : _b.region });
    let pagePath;
    if (isDataRequest(uri) &&
        !(pagePath = router(manifest)(uri)).endsWith(".html")) {
        const page = require(`./${pagePath}`);
        const { req, res, responsePromise } = next_aws_cloudfront_1.default(event.Records[0].cf);
        const isSSG = !!page.getStaticProps;
        const { renderOpts, html } = yield page.renderReqToHTML(req, res, "passthrough");
        if (isSSG) {
            const s3JsonParams = {
                Bucket: bucketName,
                Key: uri.replace(/^\//, ""),
                Body: JSON.stringify(renderOpts.pageData),
                ContentType: "application/json"
            };
            const s3HtmlParams = {
                Bucket: bucketName,
                Key: `static-pages/${request.uri
                    .replace(`/_next/data/${manifest.buildId}/`, "")
                    .replace(".json", ".html")}`,
                Body: html,
                ContentType: "text/html",
                CacheControl: "public, max-age=0, s-maxage=2678400, must-revalidate"
            };
            yield Promise.all([
                s3.putObject(s3JsonParams).promise(),
                s3.putObject(s3HtmlParams).promise()
            ]);
        }
        res.writeHead(200, response.headers);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(renderOpts.pageData));
        return yield responsePromise;
    }
    else {
        const hasFallback = hasFallbackForUri(uri, prerenderManifest);
        if (!hasFallback)
            return response;
        const s3Params = {
            Bucket: bucketName,
            Key: `static-pages${hasFallback.fallback}`
        };
        const { Body } = yield s3.getObject(s3Params).promise();
        return {
            status: "200",
            statusDescription: "OK",
            headers: Object.assign(Object.assign({}, response.headers), { "content-type": [
                    {
                        key: "Content-Type",
                        value: "text/html"
                    }
                ] }),
            body: Body === null || Body === void 0 ? void 0 : Body.toString("utf-8")
        };
    }
});
const isOriginResponse = (event) => {
    return event.Records[0].cf.config.eventType === "origin-response";
};
const hasFallbackForUri = (uri, prerenderManifest) => {
    return Object.values(prerenderManifest.dynamicRoutes).find((routeConfig) => {
        const re = new RegExp(routeConfig.routeRegex);
        return re.test(uri);
    });
};
const createRedirectResponse = (uri, querystring) => {
    const location = querystring ? `${uri}?${querystring}` : uri;
    return {
        status: "308",
        statusDescription: "Permanent Redirect",
        headers: {
            location: [
                {
                    key: "Location",
                    value: location
                }
            ],
            refresh: [
                {
                    key: "Refresh",
                    value: `0;url=${location}`
                }
            ]
        }
    };
};
const setCloudFrontResponseStatus = (response, res) => {
    if (res.statusCode == 404) {
        response.status = "404";
        response.statusDescription = "Not Found";
    }
    else if (res.statusCode == 500) {
        response.status = "500";
        response.statusDescription = "Internal Server Error";
    }
};
