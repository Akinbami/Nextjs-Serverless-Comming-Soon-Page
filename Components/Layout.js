import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import * as Scroll from 'react-scroll';
import { Link, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Layout = props => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSetActive = function(to) {
        console.log(to);
    };

    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />

                <title>Clear Client - Coming Soon</title>

                <meta name="keywords" content="Clear Wellness, Clear, Wellness" />
                <meta name="author" content="SmartpySolutions" />

                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/img/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/img/favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/img/favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/img/favicon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/img/favicon/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/img/favicon/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="msapplication-TileColor" content="#4296E2" />

                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="573" />
                <meta property="og:title" content="Clear Wellness Coming Soon Landing Page" />
                <meta property="og:description" content="Clear Wellness Coming Soon Landing Page" />
                <meta property="og:url" content="index.html" />
                <meta property="og:image" content="" />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
            
                <link rel="stylesheet" type="text/css" href="/css/plugins.css" />
                <link rel="stylesheet" type="text/css" href="/css/loaders/loader.css" />
                <script src="/particles.js-master/particles.js"></script>

                <link href="/lity/dist/lity.css" rel="stylesheet" />
                <script src="/lity/vendor/jquery.js"></script>
                <script src="/lity/dist/lity.js"></script>



                <meta name="theme-color" content="#4296E2" />
                <meta name="msapplication-navbutton-color" content="#4296E2" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#4296E2" />
            </Head>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img className="brand-logo" src="/img/logo.png" alt="" loading="lazy" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link activeClass="nav-item" to="why" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
                                    <a className="nav-link">Why clear <span className="sr-only">(current)</span></a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link activeClass="nav-item" to="community" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
                                    <a className="nav-link">Community</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="nav-item" to="team" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
                                    <a className="nav-link"tabindex="-1" aria-disabled="true">Our team</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="nav-item" to="founder" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
                                    <a className="nav-link" tabindex="-1" aria-disabled="true">Message</a>
                                </Link>
                            </li>
                            <Link activeClass="nav-item" to="connect" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
                                <li className="nav-item">
                                    <a className="nav-link" tabindex="-1" aria-disabled="true">Connect</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
            
            {props.children}

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
            <script src="/js/particles.js"></script>
            <style jsx global>{`
                html {
                    font-size: 14px;
                    font-family: Maison Neue Extended;
                }

                .brand-logo{
                    max-width: 10rem;
                }

                .header-nav{
                    padding-left: 10rem;
                    padding-right: 10rem;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                }

                nav a {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 19px;
                    color: #5DA4E0  !important;
                }

                @media (min-width: 768px) {
                    html {
                        font-size: 16px;
                    }
                }

                .container {
                    max-width: 960px;
                }

                .pricing-header {
                    max-width: 700px;
                }

                .card-deck .card {
                    min-width: 220px;
                }
            `}
            </style>
        </React.Fragment>
    )
}

export default Layout;