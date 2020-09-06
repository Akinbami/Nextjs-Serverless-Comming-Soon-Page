import Link from 'next/link';

const AboutSection = () => (
	<section id="about" class="content-section about">
      <div class="container-fluid p-0 fullheight">
        <div class="row no-gutters fullheight">

          <div class="content-section__background">
            <span class="section-caption left">About</span>
            <span class="section-caption right">Us</span>
          </div>

          <div class="content-section__controls controls-about">
            <div class="color-layer color-layer-dark"></div>
            <a href="#" id="about-close" class="section-close">Close</a>
          </div>

          <div class="col-12 col-xl-6 content-section__info">
            <div class="blocks-container">

              <div class="content-block">
                <h2>Download
                  <span class="outline-white">Our new mobile app</span>
                  and stand a chance to win ₦1,000,000
                  <small>Only for the first 1,000 subscribers.</small>
                </h2>
              </div>

              <div class="content-block">
                     <div class="show-skillbar">
                  <div class="skillbar" data-percent="84">
                    <span class="skillbar-title">Android</span>
                    <p class="skillbar-bar"></p>
                    <span class="skill-bar-percent"></span>
                  </div>
                </div>
                <div class="show-skillbar">
                  <div class="skillbar" data-percent="90">
                    <span class="skillbar-title">iOS</span>
                    <p class="skillbar-bar"></p>
                    <span class="skill-bar-percent"></span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="col-12 col-xl-6 content-section__media">
            <div class="media-container">

              <div class="image about-image">
                <div class="color-layer color-layer-dark"></div>
                <div class="image-caption">
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
