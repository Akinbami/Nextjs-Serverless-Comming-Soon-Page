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
            <p className="popup-title__title">Signup for access to the most<br /> exclusive wellness products and services!</p>
          </div>

          <div className="content-block">
            <div className="form-container text-center">

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

              <form className="form notify-form form-inline mx-auto">
                  <input type="email" id="email" placeholder="Enter your email" name="email" required />
                  <button type="submit"><span className="caption">Join Now</span></button>
              </form>

            </div>
          </div>

        </div>

      </div>
      <style jsx>{`

        .popup-title__title {
          font: normal 500 2.4rem/1 "Montserrat", sans-serif;
          text-transform: none;
          color: white;
          text-align: center;
        }

        .section-caption{
          color: #4296E2;
          -webkit-text-stroke-color: #4296E2;
        }
        .reply-group {
          position: absolute;
          top: -2rem;
          left: 13rem;
        }

        .reply-group__icon{
          color: #4296E2;
        }

      `
      }
      </style>

    </div>
);

export default NotifyPopup;



