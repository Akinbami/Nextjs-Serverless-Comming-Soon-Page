import Link from 'next/link';

const NotifyPopup = () => (
	<div id="notify" className="popup notify">

      <div className="popup__background">
        <span className="section-caption bright left">We are lauching</span>
        <span className="section-caption bright right">Soon</span>
      </div>

      <div className="popup__container">

        <div className="popup__controls">
          <a className="popup-close" href="#0" id="notify-close">Close</a>
        </div>

        <div className="popup__content">

          <div className="content-block popup-title">
            <p className="popup-title__title">Lets us <span className="outline-white">inform you</span> about our launch</p>
            <p className="popup-title__text">Subscribe to our newsletter and we will send you a notification about the launch of new mobile app.</p>
          </div>

          <div className="content-block">
            <div className="form-container">

              <div className="reply-group subscription-ok">
                <i className="far fa-check-circle reply-group__icon"></i>
                <p className="reply-group__title txt-light">Done!</p>
                <span className="reply-group__text">Thanks for subscribing. We will send you a notification about our app.</span>
              </div>
              <div className="reply-group subscription-error">
                <i className="far fa-sad-tear reply-group__icon"></i>
                <p className="reply-group__title">Ooops!</p>
                <span className="reply-group__text">Something went wrong. Please try again.</span>
              </div>

              <form className="form notify-form form-light">
                <input className="" type="email" placeholder="Enter your email address*" required />
                <span className="inputs-description">*Required fields</span>
                <button className="btn btn-fill" type="submit">
                  <span className="caption">Send</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>

    </div>
);

export default NotifyPopup;



