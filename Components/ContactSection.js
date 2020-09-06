import Link from 'next/link';

const ContactSection = () => (
	<section id="contact" className="content-section contact">
      <div className="container-fluid p-0 fullheight">
        <div className="row no-gutters fullheight">

          <div className="content-section__background">
            <span className="section-caption left">Contact</span>
            <span className="section-caption right">Us</span>
          </div>

          <div className="content-section__controls controls-contact">
            <div className="color-layer color-layer-dark"></div>
            <a href="#" id="contact-close" className="section-close">Close</a>
          </div>

          <div className="col-12 col-xl-6 content-section__info">
            <div className="blocks-container">

              <div className="content-block">
                <h2>Hello and
                  <span className="outline-white">welcome</span>
                  to our new office
                  <small>Our new website is under construction but we are ready to go!</small>
                </h2>
                <p className="section-text">You can call us or leave a request and we’ll reply as soon as posible.
                  We are always glad to see you in our office from
                  <span>9:00</span>
                   to
                  <span>18:00</span>
                   every weekday. Contact us via phone:
                   <a href="tel:+234 1 8184900001">+234 (81) 849 00001</a>
                   or email:
                   <a href="mailto:sales@hustlemobile.ng?subject=Message%20from%20your%20site">sales@hustlemobile.ng</a>.
                </p>
              </div>

              <div className="content-block contact-buttons">
                <a href="#" id="sayhello-trigger-2" className="btn">
                  <span className="btn-caption">Send a message!</span>
                  <span className="btn-icon-right btn-custom-icon-right"></span>
                </a>
              </div>

            </div>
          </div>

          <div className="col-12 col-xl-6 content-section__media">
            <div className="media-container">

              <div className="map">
                <div id="google-map">
                  <div id="google-container"></div>
                  <div id="zoom-in">
                    <span className="btn-icon fas fa-plus"></span>
                  </div>
                  <div id="zoom-out">
                    <span className="btn-icon fas fa-minus"></span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
);

export default ContactSection;