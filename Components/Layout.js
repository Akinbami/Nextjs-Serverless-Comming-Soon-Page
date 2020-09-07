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

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />

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
                    <p>Hustle Mobile
                        <a href="index.html" target="_blank">© 2020</a>
                    </p>
                    </div>
                </div>
            </div>

            <Header />

            <section id="main" className="main-section">

                <div className="main-section__header">
                    <div className="logo">
                        Your Logo Here
                    </div>

                    <a href="#0" id="sayhello-trigger" className="sayhello-trigger top-left-mobile top-right-desktop-dist">
                        <i className="far fa-envelope"></i>
                        <span className="caption">Notify me</span>
                    </a>

                    <div className="menu-button top-right">
                        <a href="#0" id="menu-trigger" className="menu-trigger"><span></span></a>
                    </div>

                </div>

                <div className="container-fluid p-0 fullheight">
                    <div className="row no-gutters flex-xl-row-reverse fullheight">

                        <div className="col-12 col-xl-6 main-section__intro">

                            <div className="intro-content">
                                <div id="headline" className="headline text-center">
                                    <p className="headline-heading mx-auto">
                                        <span className="outline-white">Signup </span>
                                         for access to the most exclusive
                                         <span className="colored"> wellness products</span>
                                         <span className="outline-white"> and</span> 
                                         <span className="colored">services!</span>
                                    </p>
                                    
                                    <form className="form notify-form mx-auto form-light">
                                        <input className="" type="email" placeholder="Enter your email address*" required />
                                        <button className="btn btn-fill" type="submit">
                                            <span className="caption">Join Now</span>
                                        </button>
                                    </form>

                                    <p className="hash-tag">#ClearMakeitaLifestyle</p>

                                    <p className="share-message mx-auto">For a chance to win from our range of products, share with your friends</p>

                                    <span className="px-2"><FiFacebook size="2em"/></span>
                                    <span className="px-2"><FaInstagram size="2em"/></span>
                                    <span className="px-2"><AiOutlineMail size="2em"/></span>

                                    
                                   
                                </div>

                            </div>

                            <div className="socials bottom-right">
                                <ul>
                                </ul>
                            </div>

                        </div>

                        <div className="col-12 col-xl-6 main-section__media">
                            <div className="media-content">

                                <div className="media-image media-image-3"></div>
                                <div id="stars-js"></div>

                                <div className="color-layer color-layer-dark"></div>

                                <div className="media-countdown">
                                    <div className="countdown-caption">
                                        <p className="countdown-caption-top">CLEAR<br /><span className="text-muted">wellness</span></p>
                                    </div>
                                    <div>
                                        <p className="countdown-caption-center">Health isn’t a goal, its a way of living</p>
                                    </div>

                                    
                                    <div className="countdown countdown-days">
                                        <span className="help-text">Become a Clear Client <FaGreaterThan size="1em" /></span>
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

            <style jsx>{`
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

                .notify-form{
                    max-width: 60rem;
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
                    max-width: 60rem;
                    font-size: 3rem;
                    font-weight: 700;
                    color: #fff;
                    line-height: 3rem;
                    margin-bottom: 4rem
                }

                
                .main-section{
                    position: absolute;
                }

                .main-section__intro{
                    background: #4296E2;
                }

                .share-message{
                    max-width: 50rem;
                    color: #fff;
                    font-size: 1.5rem;
                    font-wight: 400;
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
                        left: 2rem;
                        top: 2.5rem;

                        font-family: Maison Neue Extended;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 3rem;
                        line-height: 3rem;

                        color: #3377BB;
                    }

                    .countdown-caption-center{
                        position: absolute;
                        width: 100%;
                        left: 2rem;
                        top: 25rem;

                        font-family: Manrope;
                        font-style: normal;
                        font-weight: 1;
                        font-size: 3rem;
                        line-height: 3rem;

                        color: #4296E2;

                    }
                }
            `}

            </style>
            

    </React.Fragment>
)
}

export default Layout;