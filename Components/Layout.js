import React,  {useState, useEffect, useContext} from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from './Header';


const Layout = props => {
    const [isLoading, setIsLoading] = useState(false);
    
	
      
	return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />

                <title>Hustle Mobile - Coming Soon</title>

                <meta name="keywords" content="hustlemobile, delivery, coming soon, food delivery, courier, shopping, medical supplies, hustle, hustlers, konga, jumia, jumia food" />
                <meta name="author" content="Hustle" />

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
        

	    	{props.children}

		    
		<script src="js/libs.min.js"></script>
        <script src="js/gallery-init.js"></script>
        <script src="js/hintio-custom.js"></script>

		
		<style jsx global>{`
       

        `}</style>

  </React.Fragment>
)
}

export default Layout;