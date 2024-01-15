import { Link } from 'react-router-dom';

import './mainBanner.css';
import starImage from '../../resources/icons/star.svg';

const MainBanner = () => {
    return (
        <section className="banner">
            <img className="banner__image-decor-1" src={starImage} alt="" />
            <img className="banner__image-decor-2" src={starImage} alt="" />
            <div className="container">
                <h2 className="banner__title">
                    Find clothes that matches your style
                </h2>
                <p className="banner__desc">
                    Browse through our diverse range of meticulously crafted
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                </p>
                <Link to="/shop" className="shop-link">
                    Shop Now
                </Link>
                <div className="banner__stats">
                    <div className="stats__item">
                        <p className="stats__data">200+</p>
                        <p className="stats__desc">International Brands</p>
                    </div>
                    <span className="stats__separator"></span>
                    <div className="stats__item">
                        <p className="stats__data">2,000+</p>
                        <p className="stats__desc">High-Quality Products</p>
                    </div>
                    <span className="stats__separator"></span>
                    <div className="stats__item">
                        <p className="stats__data">30,000+</p>
                        <p className="stats__desc">Happy Customers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainBanner;
