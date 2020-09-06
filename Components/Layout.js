import React,  {useState, useEffect, useContext} from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from './Header';


const Layout = props => {
    const [isLoading, setIsLoading] = useState(false);
    
	
      
	return (
        <React.Fragment>
            <Head>
                <meta charset="utf-8" />

                <title>Hustle Mobile - Coming Soon</title>

                <meta name="keywords" content="hustlemobile, delivery, coming soon, food delivery, courier, shopping, medical supplies, hustle, hustlers, konga, jumia, jumia food" />
                <meta name="author" content="Hustle" />

                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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

            <div class="loader">
                <div class="loader__container">
                    <div class="loader-content">
                    <div class="loader-text">
                        <span class="outline-colored">Coming soon!</span>
                    </div>
                    </div>
                    <div class="loader-caption">
                    <p>Hustle Mobile
                        <a href="index.html" target="_blank">© 2020</a>
                    </p>
                    </div>
                </div>
            </div>
        

	    <main role="main">
	    	{props.children}
	    

		    <div className="section bg-tertiary">
		        <div className="content-wrap py-5">
		          <div className="container">
		            <div className="row align-items-center">
		              <div className="col-sm-12 col-md-12">
		                <div className="cta-1 text-center">
		                          <div className="body-text mb-3">
		                            <h3 className="my-1 text-secondary">Note! What We Do?</h3>
		                            <div className="what-inner">
			                            <ul className="text-left text-light">
			                            	<li>Create personalised academic and behavioural programmes</li>
											<li>Encourage and support parental involvement</li>
											<li>Promote child development in communication, self-confidence and independence</li>
											<li>Provide clear guidance on teaching materials, individual educational plans and learning programmes</li>
											<li>Provide a calm and purposeful learning environment</li>
										</ul>
									</div>
		                          </div>
		                      </div>
		              </div>
		            </div>
		          </div>
		        </div>
		    </div>    

		    <div className="footer">
		        <div className="content-wrap">
		          <div className="container">
		            
		            <div className="row">
		              <div className="col-sm-12 col-md-6 col-lg-3">
		                <div className="footer-item">
		                  <img className="abc-logo-footer" src="/abi_logo_2.png" alt="logo bottom" />
		                  <div className="spacer-30"></div>
		                </div>
		              </div>          

		              <div className="col-sm-12 col-md-6 col-lg-3">
		                <div className="footer-item">
		                  <div className="footer-title">
		                    Contact Info
		                  </div>
		                  <ul className="list-info">
		                    <li>
		                      <div className="info-icon">
		                        <span className="fa fa-phone"></span>
		                      </div>
		                      <div className="info-text"> 07542 289 626</div>
		                    </li>
		                    <li>
		                      <div className="info-icon">
		                        <span className="fa fa-envelope"></span>
		                      </div>
		                      <div className="info-text">info@schoolofabi.com</div>
		                    </li>
		                    <li>
		                      <div className="info-icon">
		                        <span className="fa fa-clock-o"></span>
		                      </div>
		                      <div className="info-text">Mon - Fri 9.00am - 6.00pm</div>
		                    </li>
		                  </ul>

		                </div>
		              </div>

		              <div className="col-sm-12 col-md-6 col-lg-3">
		                <div className="footer-item">
		                  <div className="footer-title">
		                    Useful Links
		                  </div>
		                  
		                  <ul className="list text-dark">
		                    <li><a href="/" title="About us">Home</a></li>
		                    <li><a href="/about-us" title="About us">About us</a></li>
		                    <li><a href="/services" title="Our Classes">Our Services</a></li>
		                    <li><a href="/blog" title="Our Events">Blogs</a></li>
		                    <li><a href="/contact-us" title="Contact Us">Contact Us</a></li>
		                  </ul>
		                    
		                </div>
		              </div>
		              
		              <div className="col-sm-12 col-md-6 col-lg-3">
		                <div className="footer-item">
		                  <div className="footer-title">
		                    Get in Touch
		                  </div>
		                  <div className="sosmed-icon d-inline-flex">
		                    <a href="https://www.facebook.com/SchoolofABI/" target="_blank" className="fb"><i className="fa fa-facebook"></i></a> 
		                    <a href="https://twitter.com/schoolofabi?s=20" className="tw" target="_blank"><i className="fa fa-twitter"></i></a> 
		                    <a href="https://www.instagram.com/schoolofabi/" className="ig" target="_blank"><i className="fa fa-instagram"></i></a> 
		                  </div>
		                  <div className="subscribe-button">
		                  	<button type="button" data-toggle="modal" data-target="#subscribe" className="btn btn-primary my-2">Subscribe to Mailing List </button>
		                  </div>
							<div className="modal fade" id="subscribe" tabindex="-1" role="dialog" aria-labelledby="subscribeLabel" aria-hidden="true">
							  <div className="modal-dialog" role="document">
							    <div className="modal-content">
							    	{subscriptionSuccess?<h3 className="m-5 text-center">{subscriptionSuccess}</h3>:
							    		<React.Fragment>
									      <div className="modal-header">
									        <p className="modal-title h5" id="exampleModalLabel">Enter your email to Subscribe</p>
									        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
									          <span aria-hidden="true">&times;</span>
									        </button>
									      </div>
										      <div className="modal-body">
										        <input type="email" className="form-control form-control-lg" onChange={handleEmail}   placeholder="Enter email" />
										      </div>
										      <div className="modal-footer">
										      	{isLoading?
							                          <button className="btn btn-danger" type="button" disabled>
							                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
							                            sending...
							                          </button>:
							                          <button type="button"  onClick={handleSubmit} className="btn btn-primary">Subscribe</button>
							                      }
									      	</div>
									    </React.Fragment>
									}
							    </div>
							  </div>
							</div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		        
		        <div className="fcopy">
		          <div className="container">
		            <div className="row">
		              <div className="col-sm-12 col-md-12">
		                <p className="ftex">Copyright 2020 &copy; <span className="color-primary">ABI</span>. Designed by <span className="color-primary">smartpy.</span></p> 
		              </div>
		            </div>
		          </div>
		        </div>
		    </div>   
		</main>
		<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
		<script src="/js/vendor/owl.carousel.js"></script>
		<script src="/js/vendor/jquery.magnific-popup.min.js"></script>

		
		<style jsx global>{`
       

        `}</style>

  </React.Fragment>
)
}

export default Layout;