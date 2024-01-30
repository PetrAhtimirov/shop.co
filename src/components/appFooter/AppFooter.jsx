import { Link } from 'react-router-dom';

import NewsLetterSub from '../newsLetterSub/NewsLetterSub';

import './appFooter.css';
import applepayImage from './images/applepay.svg';
import googlepayImage from './images/googlepay.svg';
import mastercardImage from './images/mastercard.svg';
import paypalImage from './images/paypal.svg';
import visaImage from './images/visa.svg';

const AppFooter = () => {
    return (
        <section className="footer-wrapper">
            <div className="container footer-container">
                <NewsLetterSub />
                <footer>
                    <div className="footer-main">
                        <div className="footer__info">
                            <span className="footer__logo">Shop.co</span>
                            <p className="footer__desc">
                                We have clothes that suits your style and which
                                you’re proud to wear. From women to men.
                            </p>
                            <ul className="socials"></ul>
                        </div>
                        <div className="footer__item-nav">
                            <h3>Company</h3>
                            <ul>
                                <li>
                                    <Link className="dis" to="#">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dis" to="#">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dis" to="#">
                                        Works
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dis" to="#">
                                        Career
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__item-nav">
                            <h3>Help</h3>
                            <ul>
                                <li>
                                    <Link className="dis" to="#">
                                        Customer Support
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dis" to="#">
                                        Delivery Details
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dis" to="#">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dis" to="#">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__item-nav">
                            <h3>FAQ</h3>
                            <ul>
                                <li>
                                    <Link className="dis" to="#">
                                        Account
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dis" to="#">
                                        Manage Deliveries
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dis" to="#">
                                        Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dis" to="#">
                                        Payments
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__item-nav">
                            <h3>Resources</h3>
                            <ul>
                                <li>
                                    <Link className="dis" to="#">
                                        Free eBooks
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dis" to="#">
                                        Development Tutorial
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dis" to="#">
                                        How to - Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dis" to="#">
                                        Youtube Playlist
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="footer__hr" />
                    <div className="footer-other">
                        <p className="footer__mark">
                            Shop.co © 2000-2023, All Rights Reserved
                        </p>
                        <ul className="footer__payment">
                            <li>
                                <Link className="dis" to="#">
                                    <img src={visaImage} alt="Visa" />
                                </Link>
                            </li>
                            <li>
                                <Link className="dis" to="#">
                                    <img
                                        src={mastercardImage}
                                        alt="Master card"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link className="dis" to="#">
                                    <img src={paypalImage} alt="PayPal" />
                                </Link>
                            </li>
                            <li>
                                <Link className="dis" to="#">
                                    <img src={applepayImage} alt="Apple pay" />
                                </Link>
                            </li>
                            <li>
                                <Link className="dis" to="#">
                                    <img
                                        src={googlepayImage}
                                        alt="Google pay"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default AppFooter;
