import Link from 'next/link';

const PortfolioSection = () => (
	<section id="portfolio" className="content-section portfolio">
      <div className="container-fluid p-0 fullheight">
        <div className="row no-gutters fullheight">

          <div className="content-section__background">
            <span className="section-caption left">Our</span>
            <span className="section-caption right">Works</span>
          </div>

          <div className="content-section__controls controls-portfolio">
            <div className="color-layer color-layer-dark"></div>
            <a href="#" id="works-close" className="section-close">Close</a>
          </div>

          <div className="col-12 col-xl-6 content-section__info">
            <div className="blocks-container">

              <div className="content-block">
                <h2>Meet our
                  <span className="outline-white">Hustle</span>
                  projects
                  <small>Hustle Mobile</small>
                </h2>
                <p className="section-text">Hustle Mobile Coming Soon</p>
              </div>

              <div className="content-block features">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 col-sm-6 features__item">
                      <img src="img/icons/feature-icon-1.svg" alt="Hintio Template Feature" />
                      <h3>Eye catching<br />design</h3>
                    </div>
                    <div className="col-12 col-sm-6 features__item">
                      <img src="img/icons/feature-icon-2.svg" alt="Hintio Template Feature" />
                      <h3>Trendy colors<br />and fonts</h3>
                    </div>
                    <div className="col-12 col-sm-6 features__item">
                      <img src="img/icons/feature-icon-3.svg" alt="Hintio Template Feature" />
                      <h3>Custom<br />Google Map</h3>
                    </div>
                    <div className="col-12 col-sm-6 features__item">
                      <img src="img/icons/feature-icon-4.svg" alt="Hintio Template Feature" />
                      <h3>Ready-to-use<br />contact form</h3>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-12 col-xl-6 content-section__media">
            <div className="media-container">

              <div className="gallery">
                <div className="row no-gutters my-gallery" itemScope itemType="http://schema.org/ImageGallery">

                  <figure className="col-12 col-sm-6" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                    <a href="http://via.placeholder.com/900x1200" data-image="http://via.placeholder.com/900x1200" className="works-link" itemProp="contentUrl" data-size="900x1200">
                      <img src="http://via.placeholder.com/900x1200" className="works-image" itemProp="thumbnail" alt="Image description" />
                    </a>
                    <figcaption className="works-description" itemProp="caption description">
                      <div className="works-description__caption">
                        <span>Hustle Mobile</span>
                      </div>
                      <h4>
                        <span><strong>Hustle</strong></span>
                        <br />
                        <small><em>Hustle</em></small>
                      </h4>
                      <p>Hustle.</p>
                    </figcaption>
                  </figure>

                  <figure className="col-12 col-sm-6" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                    <a href="http://via.placeholder.com/900x1200" className="works-link" data-image="http://via.placeholder.com/900x1200" itemProp="contentUrl" data-size="900x1200">
                      <img src="http://via.placeholder.com/900x1200" className="works-image" itemProp="thumbnail" alt="Image description" />
                    </a>
                    <figcaption className="works-description" itemProp="caption description">
                      <div className="works-description__caption">
                        <span>Hustlers</span>
                      </div>
                      <h4>
                        <span><strong>Mobile app</strong></span>
                        <br />
                        <small><em>L</em></small>
                      </h4>
                      <p>Hustlers</p>
                    </figcaption>
                  </figure>

                  <figure className="col-12 col-sm-6" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                    <a href="http://via.placeholder.com/900x1200" className="works-link" data-image="http://via.placeholder.com/900x1200" itemProp="contentUrl" data-size="900x1200">
                      <img src="http://via.placeholder.com/900x1200" className="works-image" itemProp="thumbnail" alt="Image description" />
                    </a>
                    <figcaption className="works-description" itemProp="caption description">
                      <div className="works-description__caption">
                      </div>

                    </figcaption>
                  </figure>

                  <figure className="col-12 col-sm-6" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                    <a href="http://via.placeholder.com/900x1200" className="works-link" data-image="http://via.placeholder.com/900x1200" itemProp="contentUrl" data-size="900x1200">
                      <img src="http://via.placeholder.com/900x1200" className="works-image" itemProp="thumbnail" alt="Image description" />
                      <div className="overlay"></div>
                    </a>
                    <figcaption className="works-description" itemProp="caption description">
                      <div className="works-description__caption"></div>
                    </figcaption>
                  </figure>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
);

export default PortfolioSection;



