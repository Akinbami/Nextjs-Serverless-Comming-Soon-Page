import React,  {useState, useEffect, useContext} from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { FiFacebook } from 'react-icons/fi';
import { FaInstagram, FaGreaterThan } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';




import Header from './Header';


const Layout = props => {
    const [isLoading, setIsLoading] = useState(false);
    
	
      
	return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />

                <title>Hustle Mobile - Coming Soon</title>

                <meta name="keywords" content="hustlemobile, delivery, coming soon, food delivery, courier, shopping, medical supplies, hustle, hustlers, konga, jumia, jumia food" />
                <meta name="author" content="SmartpySolutions" />

                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <link rel="icon" type="image/png" sizes="250x250" href="img/logo.png" />

                <link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64 96x96" href="/img/favicon/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-touch-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/img/favicon/apple-touch-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-touch-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/img/favicon/apple-touch-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-touch-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-touch-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-touch-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/img/favicon/apple-touch-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/img/favicon/android-chrome-192x192.png" />
                <link rel="manifest" href="/img/favicon/site.html" />
                <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.html" color="#25237e" />
                <meta name="msapplication-config" content="/img/favicon/browserconfig.xml" />
                <meta name="msapplication-TileColor" content="#e51743" />

                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="573" />
                <meta property="og:title" content="Hustle Coming Soon Landing Page" />
                <meta property="og:description" content="Hustle Coming Soon Landing Page" />
                <meta property="og:url" content="index.html" />
                <meta property="og:image" content="hustlemobile.ng/og-image.html" />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />

                <link rel="stylesheet" type="text/css" href="/css/plugins.css" />
                <link rel="stylesheet" type="text/css" href="/css/loaders/loader.css" />
                <link rel="stylesheet" type="text/css" href="/css/main.css" />

                <meta name="theme-color" content="#e51743" />
                <meta name="msapplication-navbutton-color" content="#e51743" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#e51743" />

                

            </Head>

            <div className="loader">
                <div className="loader__container">
                    <div className="loader-content">
                    <div className="loader-text">
                        <span className="outline-colored">Coming soon!</span>
                    </div>
                    </div>
                    <div className="loader-caption">
                    <p>Clear Wellness
                        <a href="/" target="_blank">© 2020</a>
                    </p>
                    </div>
                </div>
            </div>

            <Header />

            <section id="main" className="main-section">

                <div className="container-fluid p-0 fullheight">
                    <div className="row no-gutters flex-xl-row-reverse fullheight">

                        <div className="col-12 col-xl-6 main-section__intro">
                            <div className="intro-content text-center">
                                <p className="headline-heading">
                                    Signup for access to the most<br /> exclusive wellness products and services!
                                </p>
                                <div className="signup-form">
                                    <form className="form-inline mx-auto">
                                        <input type="email" id="email" placeholder="Enter your email" name="email" />
                                        <button type="submit">Join Now</button>
                                    </form>
                                </div>
                                

                                <p className="hash-tag">#ClearMakeitaLifestyle</p>

                                <p className="share-message mx-auto">For a chance to win from our range of products, share with your friends</p>
                                <p className="text-light">
                                    <span className="px-2"><FiFacebook size="1.5em"/></span>
                                    <span className="px-2"><FaInstagram size="1.5em"/></span>
                                    <span className="px-2"><AiOutlineMail size="1.5em"/></span>
                                </p>
                            </div>

                            <div className="socials bottom-right">
                                <ul>
                                </ul>
                            </div>

                        </div>

                        <div className="col-12 col-xl-6 main-section__media">
                            <div className="media-content">

                                <div id="stars-js"></div>

                                <div className="color-layer color-layer-dark"></div>

                                <div className="media-countdown">
                                    <div className="countdown-caption">
                                        <p className="countdown-caption-top">CLEAR<br /><span className="text-muted">wellness</span></p>
                                    </div>
                                    <div>
                                        <p className="countdown-caption-center">Health isn’t a goal, its a way of living</p>
                                    </div>

                                    <div className="headline__btnholder">
                                        <a href="#" id="notify-trigger" className="btn">
                                            <span className="btn-caption ">Become a Clear Client <FaGreaterThan size="1em" /></span>
                                            <span className="btn-icon-right btn-custom-icon-right"></span>
                                        </a>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="main-section__hover"></div>

            </section>
        
	    	{props.children}

            <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">

                <div className="pswp__bg"></div>

                <div className="pswp__scroll-wrap">

                    <div className="pswp__container">
                        <div className="pswp__item"></div>
                        <div className="pswp__item"></div>
                        <div className="pswp__item"></div>
                    </div>

                    <div className="pswp__ui pswp__ui--hidden">

                    <div className="pswp__top-bar">


                        <div className="pswp__counter"></div>

                        <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>

                        <button className="pswp__button pswp__button--share" title="Share"></button>

                        <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                        <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                        <div className="pswp__preloader">
                                <div className="pswp__preloader__icn">
                                <div className="pswp__preloader__cut">
                                    <div className="pswp__preloader__donut"></div>
                                </div>
                                </div>
                        </div>
                    </div>

                        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div className="pswp__share-tooltip"></div>
                        </div>

                        <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                        </button>

                        <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                        </button>

                        <div className="pswp__caption">
                            <div className="pswp__caption__center"></div>
                        </div>

                    </div>

                </div>

            </div>

		    
            <script src="js/libs.min.js"></script>
            <script src="js/gallery-init.js"></script>
            <script src="js/hintio-custom.js"></script>

            <style jsx global>{`

                .btn-caption{
                    font-size: 1.5rem;
                    font-weight: 500;
                }

                .btn-fill{
                    background: #1C1C1C;
                }

                .btn-fill:hover {
                    background: #1C1C1C;
                }

                .countdown-caption{
                    width: 100%;
                }

                .countdown-caption-top{
                    position: absolute;
                    width: 197px;
                    height: 96px;
                    left: 55px;
                    top: 51px;

                    font-family: Maison Neue Extended;
                    font-style: normal;
                    font-weight: 800;
                    font-size: 4rem;
                    line-height: 4rem;

                    color: #3377BB;
                }

                .countdown-caption-center{
                    position: absolute;
                    width: 465px;
                    height: 120px;
                    left: 110px;
                    top: 390px;

                    font-family: Manrope;
                    font-style: normal;
                    font-weight: 1;
                    font-size: 52px;
                    line-height: 60px;

                    color: #4296E2;

                }

                .countdown-caption-bottom{
                    position: absolute;
                    width: 321px;
                    height: 38px;
                    left: 110px;
                    top: 799px;

                    font-family: Manrope;
                    font-style: normal;
                    font-weight: 1;
                    font-size: 28px;
                    line-height: 38px;
                    text-align: center;

                    color: #fff;
                }

                .headline__btnholder{
                    position: absolute;
                    width: 321px;
                    height: 38px;
                    left: 110px;
                    top: 88rem;
                }

                .form-inline {
                    display: flex !important;
                    flex-flow: row wrap;
                    align-items: center;
                    max-width: 55rem;
                }

                .form-inline label {
                    margin: 5px 10px 5px 0;
                }

                .form-inline input {
                    vertical-align: middle;
                    margin: 5px 10px 5px 0;
                    padding: 10px;
                    background-color: #fff;
                    border: 1px solid #ddd;
                    max-width: 40rem;
                    height: 5.5rem;
                    font-size: 1.5rem;
                    font-weight: 700;
                    border-radius: .5rem;
                }

                .form-inline button {
                    padding: 10px 20px;
                    background-color: black;
                    border: 1px solid #ddd;
                    color: white;
                    height: 5.5rem;
                    font-size: 2rem;
                    border-radius: .5rem;
                }

                .form-inline button:hover {
                    background-color: black;
                }

                .signup-form{
                    padding-top: 5rem;
                }

                @media (max-width: 800px) {
                    .form-inline input {
                        margin: 10px 0;
                    }

                    .form-inline {
                        flex-direction: column;
                        align-items: stretch;
                    }
                }

                .notify-form{
                    max-width: 60rem;
                }

                .loader__container .loader-content .loader-text span.outline-colored {
                    color: #4296E2;
                    -webkit-text-fill-color: transparent;
                    -webkit-text-stroke-width: 2px;
                    -webkit-text-stroke-color: #4296E2;
                }
                

                .hash-tag{
                    font-size: 2rem;
                    font-weight: 700;
                    color: #fff;
                    margin-top: 10rem;
                }

                .headline{
                    width: 100%;
                    padding-top: 30%;
                }

                .headline-heading{
                    position: relative;
                    width: 100%;
                    height: 66px;

                    font-family: Manrope;
                    font-style: normal;
                    font-weight: 1;
                    font-size: 24px;
                    line-height: 33px;
                    text-align: center;

                    margin-top: 28rem;

                    /* WHITE */

                    color: #FFFFFF;
                }

                .help-text{
                    position: relative;
                    height: 38px;
                    left: 110px;
                    top: 0rem;

                    font-family: Manrope;
                    font-style: normal;
                    font-weight: 1;
                    font-size: 2rem;
                    text-align: center;

                    color: #656565;
                }

                
                .main-section{
                    position: absolute;
                }

                .main-section__intro{
                    background-image: url("/img/commingsoon.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    -webkit-background-size: cover;
                        -moz-background-size: cover;
                            background-size: cover;
                }

                .media-countdown {
                    background: #fff;
                }

                .share-message{
                    max-width: 50rem;
                    color: #fff;
                    font-size: 2rem;
                    font-weight: 500;
                    margin-top: 10rem;
                    margin-bottom: 5rem;
                }

                span.outline-white {
                    color: white;
                    -webkit-text-fill-color: transparent;
                    -webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: white;
                }

                span.colored {
                    color: #3377BB;
                }

                .text-muted{
                    font-size: 3rem;
                }

                @media (max-width: 414px) {
                    .countdown-caption-top{
                        position: absolute;
                        width: 100%;
                        height: 5rem;
                        left: .5rem;
                        top: .5rem;

                        font-family: Maison Neue Extended;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 2.5rem;
                        line-height: 2.5rem;

                        color: #3377BB;
                    }

                    .countdown-caption-center{
                        position: absolute;
                        width: 100%;
                        left: 2rem;
                        top: 20rem;

                        font-family: Manrope;
                        font-style: normal;
                        font-weight: 1;
                        font-size: 4rem;
                        line-height: 4rem;

                        color: #4296E2;

                    }

                    .countdown-caption-bottom{
                        position: absolute;
                        width: 321px;
                        height: 38px;
                        left: 110px;
                        top: 20rem;

                        font-family: Manrope;
                        font-style: normal;
                        font-weight: 1;
                        font-size: 28px;
                        line-height: 38px;
                        text-align: center;

                        color: #fff;
                    }

                    .headline-heading{
                        margin-top: 20rem;
                    }

                    .headline__btnholder{
                        position: absolute;
                        width: 321px;
                        height: 38px;
                        left: 2rem;
                        top: 50rem;
                    }

                    .intro-content{
                        padding-left: 1rem !important;
                        padding-right: 1rem !important;
                        padding-top: 0rem !important;

                    }

                    .text-muted{
                        font-size: 2.5rem;
                    }
                }
            `}

            </style>
            

    </React.Fragment>
)
}

export default Layout;