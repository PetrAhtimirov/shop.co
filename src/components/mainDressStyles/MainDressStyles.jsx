import { Link } from 'react-router-dom';

import './mainDressStyles.css';
import arrowRightImage from './images/arrow-right.svg';

const MainDressStyles = () => {
    return (
        <section className="main-dress-styles">
            <div className="container">
                <div className="main-dress-styles__inner">
                    <h2 className="main-dress-styles__title">
                        Browse by dress style
                    </h2>
                    <div className="dress-styles__list">
                        <Link
                            to="/shop?style=Casual"
                            className="dress-styles__tile casual"
                        >
                            <h3 className="dress-style__title">Casual</h3>
                            <img
                                className="dress-style__link-effect"
                                src={arrowRightImage}
                                alt="arrow right"
                            />
                        </Link>
                        <Link
                            to="/shop?style=Formal"
                            className="dress-styles__tile formal"
                        >
                            <h3 className="dress-style__title">Formal</h3>
                            <img
                                className="dress-style__link-effect"
                                src={arrowRightImage}
                                alt="arrow right"
                            />
                        </Link>
                        <Link
                            to="/shop?style=Party"
                            className="dress-styles__tile party"
                        >
                            <h3 className="dress-style__title">Party</h3>
                            <img
                                className="dress-style__link-effect"
                                src={arrowRightImage}
                                alt="arrow right"
                            />
                        </Link>
                        <Link
                            to="/shop?style=Gym"
                            className="dress-styles__tile gym"
                        >
                            <h3 className="dress-style__title">Gym</h3>
                            <img
                                className="dress-style__link-effect"
                                src={arrowRightImage}
                                alt="arrow right"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainDressStyles;
