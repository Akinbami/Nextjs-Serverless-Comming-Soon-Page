import Link from 'next/link';

const AboutSection = () => (
	<section id="about" className="content-section about">
      <div className="container-fluid p-0 fullheight">
        <div className="row no-gutters fullheight">

          <div className="content-section__background">
            <span className="section-caption left">About</span>
            <span className="section-caption right">Us</span>
          </div>

          <div className="content-section__controls controls-about">
            <div className="color-layer color-layer-dark"></div>
            <a href="#" id="about-close" className="section-close">Close</a>
          </div>

          <div className="col-12 col-xl-6 content-section__info">
            <div className="blocks-container">

              <div className="content-block">
                <h2>Download
                  <span className="outline-white">Our new mobile app</span>
                  and stand a chance to win ₦1,000,000
                  <small>Only for the first 1,000 subscribers.</small>
                </h2>
              </div>

              <div className="content-block">
                     <div className="show-skillbar">
                  <div className="skillbar" data-percent="84">
                    <span className="skillbar-title">Android</span>
                    <p className="skillbar-bar"></p>
                    <span className="skill-bar-percent"></span>
                  </div>
                </div>
                <div className="show-skillbar">
                  <div className="skillbar" data-percent="90">
                    <span className="skillbar-title">iOS</span>
                    <p className="skillbar-bar"></p>
                    <span className="skill-bar-percent"></span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-12 col-xl-6 content-section__media">
            <div className="media-container">

              <div className="image about-image">
                <div className="color-layer color-layer-dark"></div>
                <div className="image-caption">
                  <p>
                    
                    <span></span>
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
);

export default AboutSection;
