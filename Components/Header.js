import Link from 'next/link';
import ActiveLink from './NavLink';

const Header = () => (
	<nav id="menu" class="menu">
        <div class="content-section__controls controls-menu">
        <div class="color-layer color-layer-dark"></div>
        <a href="#" id="menu-close" class="section-close menu-close">Close</a>
        </div>

        <div class="container-fluid p-0 fullheight-mobile">
        <div class="row no-gutters fullheight-mobile">

            <div class="col-12 menu__navigation">
            <div class="navigation-container">
                <ul class="navigation">
                <li>
                    <a href="#" id="contact-trigger" class="navigation__item">Contact</a>
                </li>
                </ul>
            </div>
            </div>

        </div>
        </div>

        <div class="menu__hover"></div>
    </nav>
);

export default Header;


