import Link from 'next/link';

const HelloPopup = () => (
	<div id="sayhello" className="popup sayhello">

      <div className="popup__background">
        <span className="section-caption bright left">Just say</span>
        <span className="section-caption bright right">hello</span>
      </div>

      <div className="popup__container">

        <div className="popup__controls">
          <a className="popup-close" href="#0" id="sayhello-close">Close</a>
        </div>

        <div className="popup__content">

          <div className="content-block popup-title">
            <p className="popup-title__title">Sign up for a chance to win up to
              <span className="outline-white">₦1,000,000</span>
              and download our app
            </p>
          </div>

          <div className="content-block">
            <div className="form-container">

              <div className="reply-group">
                <i className="far fa-check-circle reply-group__icon"></i>
                <p className="reply-group__title">Done!</p>
                <span className="reply-group__text">Thanks for your message. We will get once we launch.</span>
              </div>

              <form className="form sayhello-form form-light" id="sayhello-form">
                <input type="hidden" name="project_name" value="Hustle Mobile Coming Soon" />
                <input type="hidden" name="admin_email" value="support@hustlemobile.ng" />
                <input type="hidden" name="form_subject" value="Say Hello Form Message" />
                <input className="input-1" type="text" name="Name" placeholder="Your Name*" required />
                <input className="input-2" type="email" name="E-mail" placeholder="Your Email Address*" required />
                <textarea className="" name="Message" placeholder="A Few Words*" required></textarea>
                <span className="inputs-description">*Required fields</span>
                <button className="btn btn-fill">
                  <span className="caption">Send</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>

    </div>
);

export default HelloPopup;




