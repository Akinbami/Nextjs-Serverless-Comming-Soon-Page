import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Layout from '../Components/Layout';
import AboutSection from '../Components/AboutSection';
import ContactSection from '../Components/ContactSection';
import HelloPopup from '../Components/HelloPopup';
import NotifyPopup from '../Components/NotifyPopup';
import PortfolioSection from '../Components/PortfolioSection';





export default function Home() {
  return (
    <Layout>
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
                <div id="headline" className="headline">
                  <img src="img/logo.png" alt="Hustle Mobile Coming Soon" />
                  <h1>
                    <span className="outline-white">Hey Hustlers!</span>
                    Can't keep calm.
                    <span className="colored">Something New is Coming</span>
                    and its mind blowing.
                    <span className="outline-white">Special surprise</span>
                    for our first 1000 subscribers only.
                  </h1>
                  <div className="headline__btnholder">
                    <a href="#" id="notify-trigger" className="btn">
                      <span className="btn-caption">Notify me</span>
                      <span className="btn-icon-right btn-custom-icon-right"></span>
                    </a>
                  </div>
                </div>

              </div>

              <div className="explore-button bottom-left">
                <a href="#0" id="explore-trigger" className="explore vertical animated">
                  <span>More</span>
                  <span>More</span>
                  <span>More</span>
                </a>
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
                    <span className="help-text">Just a little more
                      <br />
                      it's just
                    </span>
                  </div>
                  <div className="countdown countdown-days">
                    <div id="countdown"></div>
                    <span className="help-text">Left to our launch</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="main-section__hover"></div>

      </section>

      <AboutSection />

      <PortfolioSection />

      <ContactSection />

      <NotifyPopup />

      <HelloPopup />


    </Layout>
  )
}
