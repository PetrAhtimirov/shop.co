import MultiRangeSlider from 'multi-range-slider-react';
import './filters.css';
import rightArrowImage from './images/right-arrow.svg';

const Filters = ({ filter, appendSearchParam }) => {
    return (
        <form className="filters">
            <h2 className="filters__title">Filters</h2>
            <hr className="filters__hr" />
            <ul className="filters__clothes-type">
                <li>
                    <button
                        className="filters__button"
                        onClick={(e) => {
                            e.preventDefault();
                            appendSearchParam({ type: 'T-shirt' });
                        }}
                    >
                        T-shirts
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button
                        className="filters__button"
                        onClick={(e) => {
                            e.preventDefault();
                            appendSearchParam({ type: 'Shorts' });
                        }}
                    >
                        Shorts
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button
                        className="filters__button"
                        onClick={(e) => {
                            e.preventDefault();
                            appendSearchParam({ type: 'Shirt' });
                        }}
                    >
                        Shirts
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button
                        className="filters__button"
                        onClick={(e) => {
                            e.preventDefault();
                            appendSearchParam({ type: 'Hoodie' });
                        }}
                    >
                        Hoodie
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button
                        className="filters__button"
                        onClick={(e) => {
                            e.preventDefault();
                            appendSearchParam({ type: 'Jeans' });
                        }}
                    >
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
                max={250}
                minValue={50}
                maxValue={200}
                barInnerColor="#000"
            />
            <hr className="filters__hr" />
            <h2 className="filters__title">Size</h2>
            <ul className="filters__sizes">
                <li>
                    <label htmlFor="xx-small">XX-Small</label>
                    <input type="checkbox" name="xx-small" id="xx-small" />
                </li>
                <li>
                    <label htmlFor="x-small">X-Small</label>
                    <input type="checkbox" name="x-small" id="x-small" />
                </li>
                <li>
                    <label htmlFor="small">Small</label>
                    <input type="checkbox" name="small" id="small" />
                </li>
                <li>
                    <label htmlFor="medium">Medium</label>
                    <input type="checkbox" name="medium" id="medium" />
                </li>
                <li>
                    <label htmlFor="large">Large</label>
                    <input type="checkbox" name="large" id="large" />
                </li>
                <li>
                    <label htmlFor="x-large">X-Large</label>
                    <input type="checkbox" name="x-large" id="x-large" />
                </li>
                <li>
                    <label htmlFor="xx-large">XX-Large</label>
                    <input type="checkbox" name="xx-large" id="xx-large" />
                </li>
                <li>
                    <label htmlFor="3x-large">3X-Large</label>
                    <input type="checkbox" name="3x-large" id="3x-large" />
                </li>
                <li>
                    <label htmlFor="4x-large">4X-Large</label>
                    <input type="checkbox" name="4x-large" id="4x-large" />
                </li>
            </ul>
            <hr className="filters__hr" />
            <h2 className="filters__title">Dress Style</h2>
            <ul className="filters__dress-styles">
                <li>
                    <button className="filters__button">
                        Casual
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button className="filters__button">
                        Formal
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button className="filters__button">
                        Party
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button className="filters__button">
                        Gym
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
            </ul>
            <button className="filters__submit" type="submit">
                Apply Filter
            </button>
        </form>
    );
};

export default Filters;
