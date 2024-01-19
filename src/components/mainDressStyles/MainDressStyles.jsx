import { Link } from 'react-router-dom';

import './mainDressStyles.css';

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
                        </Link>
                        <Link
                            to="/shop?style=Formal"
                            className="dress-styles__tile formal"
                        >
                            <h3 className="dress-style__title">Formal</h3>
                        </Link>
                        <Link
                            to="/shop?style=Party"
                            className="dress-styles__tile party"
                        >
                            <h3 className="dress-style__title">Party</h3>
                        </Link>
                        <Link
                            to="/shop?style=Gym"
                            className="dress-styles__tile gym"
                        >
                            <h3 className="dress-style__title">Gym</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainDressStyles;
