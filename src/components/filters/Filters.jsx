import MultiRangeSlider from 'multi-range-slider-react';
import './filters.css';
import rightArrowImage from './images/right-arrow.svg';

const Filters = ({ filter, appendSearchParam, deleteSearchParam }) => {
    const setFilter = (key, value) => {
        if (filter[key] === value) {
            deleteSearchParam(key);
        } else {
            appendSearchParam({ [key]: value });
        }
    };

    const setSize = (size, e) => {
        const sizeList = filter.size || [];
        if (sizeList.includes(size)) {
            deleteSearchParam('size');
            appendSearchParam({ size: sizeList.filter((i) => i !== size) });
        } else {
            appendSearchParam({
                size: [size, ...sizeList],
            });
        }
    };

    const sizeFilter = () => {
        const sizeTypes = [
            'XX-Small',
            'X-Small',
            'Small',
            'Medium',
            'Large',
            'X-Large',
            'XX-Large',
            '3X-Large',
            '4X-Large',
        ];

        return (
            <ul className="filters__sizes">
                {sizeTypes.map((sizeType, i) => (
                    <li key={i}>
                        <input
                            className="filters__checkbox-input"
                            type="checkbox"
                            name={sizeType}
                            id={sizeType}
                            checked={filter.size.includes(sizeType)}
                            onChange={(e) => setSize(sizeType, e)}
                        />
                        <label
                            className="filters__checkbox-label"
                            htmlFor={sizeType}
                            tabIndex={0}
                        >
                            {sizeType}
                        </label>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <section className="filters">
            <h2 className="filters__title">Filters</h2>
            <hr className="filters__hr" />
            <ul className="filters__clothes-type">
                <li>
                    <button
                        className={`filters__button ${
                            filter.type === 'T-shirt' ? 'active' : ''
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            setFilter('type', 'T-shirt');
                        }}
                    >
                        T-shirts
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button
                        className={`filters__button ${
                            filter.type === 'Shorts' ? 'active' : ''
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            setFilter('type', 'Shorts');
                        }}
                    >
                        Shorts
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button
                        className={`filters__button ${
                            filter.type === 'Shirt' ? 'active' : ''
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            setFilter('type', 'Shirt');
                        }}
                    >
                        Shirts
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button
                        className={`filters__button ${
                            filter.type === 'Hoodie' ? 'active' : ''
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            setFilter('type', 'Hoodie');
                        }}
                    >
                        Hoodie
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button
                        className={`filters__button ${
                            filter.type === 'Jeans' ? 'active' : ''
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            setFilter('type', 'Jeans');
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
                max={300}
                minValue={filter.minPrice || 0}
                maxValue={filter.maxPrice || 300}
                barInnerColor="#000"
                onChange={(data) => {
                    appendSearchParam({
                        minPrice: data.minValue,
                        maxPrice: data.maxValue,
                    });
                }}
            />
            <hr className="filters__hr" />
            <h2 className="filters__title">Size</h2>
            {sizeFilter()}
            <hr className="filters__hr" />
            <h2 className="filters__title">Dress Style</h2>
            <ul className="filters__dress-styles">
                <li>
                    <button
                        className={`filters__button ${
                            filter.style === 'Casual' ? 'active' : ''
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            setFilter('style', 'Casual');
                        }}
                    >
                        Casual
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button
                        className={`filters__button ${
                            filter.style === 'Formal' ? 'active' : ''
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            setFilter('style', 'Formal');
                        }}
                    >
                        Formal
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button
                        className={`filters__button ${
                            filter.style === 'Party' ? 'active' : ''
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            setFilter('style', 'Party');
                        }}
                    >
                        Party
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
                <li>
                    <button
                        className={`filters__button ${
                            filter.style === 'Gym' ? 'active' : ''
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            setFilter('style', 'Gym');
                        }}
                    >
                        Gym
                        <img src={rightArrowImage} alt="follow filter" />
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default Filters;
