import Link from 'next/link';
import ActiveLink from './NavLink';

const Header = () => (
	<nav id="menu" className="menu">
        <div className="content-section__controls controls-menu">
        <div className="color-layer color-layer-dark"></div>
        <a href="#" id="menu-close" className="section-close menu-close">Close</a>
        </div>

        <div className="container-fluid p-0 fullheight-mobile">
        <div className="row no-gutters fullheight-mobile">

            <div className="col-12 menu__navigation">
            <div className="navigation-container">
                <ul className="navigation">
                <li>
                    <a href="#" id="contact-trigger" className="navigation__item">Contact</a>
                </li>
                </ul>
            </div>
            </div>

        </div>
        </div>

        <div className="menu__hover"></div>
    </nav>
);

export default Header;


