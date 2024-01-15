import MultiRangeSlider from 'multi-range-slider-react';

import './filters.css';
import rightArrowImage from './images/right-arrow.svg';

const Filters = () => {
    return (
        <section className="filters">
            <h2 className="filters__title">Filters</h2>
            <hr className="filters__hr" />
            <ul className="filters__clothes-type">
                <li>
                    <button className="filters__button">
                        T-shirts
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button className="filters__button">
                        Shorts
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button className="filters__button">
                        Shirts
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button className="filters__button">
                        Hoodie
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button className="filters__button">
                        Jeans
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
            </ul>
            <hr className="filters__hr" />
            <h2 className="filters__title">Price</h2>
            <MultiRangeSlider
                ruler={false}
                label={false}
                barInnerColor="#000"
            />
        </section>
    );
};

export default Filters;
