import React, { useState, useEffect, useContext } from 'react';
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

                <title>Clear Client - Coming Soon</title>

                <meta name="keywords" content="Clear Client, Clear, Client" />
                <meta name="author" content="SmartpySolutions" />

                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <link rel="icon" type="image/png" sizes="250x250" href="img/logo.png" />

                <link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64 96x96" href="/img/favicon/favicon.ico" type="image/x-icon" />

                <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.html" color="#25237e" />
                <meta name="msapplication-config" content="/img/favicon/browserconfig.xml" />
                <meta name="msapplication-TileColor" content="#4296E2" />

                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="573" />
                <meta property="og:title" content="Clear Client Coming Soon Landing Page" />
                <meta property="og:description" content="Clear Client Coming Soon Landing Page" />
                <meta property="og:url" content="index.html" />
                <meta property="og:image" content="" />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
            
                <link rel="stylesheet" type="text/css" href="/css/plugins.css" />
                <link rel="stylesheet" type="text/css" href="/css/loaders/loader.css" />
                <script src="/particles.js-master/particles.js"></script>



                <meta name="theme-color" content="#4296E2" />
                <meta name="msapplication-navbutton-color" content="#4296E2" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#4296E2" />
            </Head>
            <div className="header-nav d-flex flex-column flex-md-row align-items-center mb-1 shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Clear<br /><span className="text-dark h6">wellness</span></h5>
                <nav className="my-2 my-md-0 mr-md-3">
                        <a className="p-2 d-none d-md-inline-block" href="#">Why clear</a>
                        <a className="p-2 d-none d-md-inline-block" href="#">Community</a>
                        <a className="p-2 d-none d-md-inline-block" href="#">Our team</a>
                        <a className="p-2 d-none d-md-inline-block" href="#">Message</a>
                        <a className="p-2 d-none d-md-inline-block" href="#">Connect</a>
                </nav>
            </div>
            {props.children}

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
            <style jsx global>{`
                html {
                    font-size: 14px;
                    font-family: Maison Neue Extended;
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