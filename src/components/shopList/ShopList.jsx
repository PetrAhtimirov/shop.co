import { useState, useEffect } from 'react';

import ClothesCard from '../clothesCard/ClothesCard';
import useClothesService from '../../services/ClothesService';

import './shopList.css';
import arrowLeftImage from './images/arrow-left.svg';
import arrowRightImage from './images/arrow-right.svg';
import arrowBottomImage from './images/arrow-bottom.svg';

const ShopList = ({
    title,
    sort,
    filter,
    appendSearchParam,
    itemsOnSlide = 9,
}) => {
    const [clothesList, setClothesList] = useState([]);
    const [clothesCount, setClothesCount] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);

    const { getClothes, getClothesCount } = useClothesService();

    useEffect(() => {
        getClothesCount(filter).then(setClothesCount);
    }, [appendSearchParam]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentSlide]);

    useEffect(() => {
        getClothes(
            sort,
            filter,
            (currentSlide - 1) * itemsOnSlide,
            currentSlide * itemsOnSlide
        ).then(setClothesList);
    }, [appendSearchParam, currentSlide, title]);

    const clothes = clothesList.map(
        ({ id, name, score, price, discount, discountPrice, preview }) => (
            <ClothesCard
                key={id}
                id={id}
                name={name}
                score={score}
                price={price}
                discount={discount}
                discountPrice={discountPrice}
                preview={require('../../data/' + preview)}
            />
        )
    );
    return (
        <section className="shop-list">
            <div className="shop-list__header">
                <h2 className="shop-list__title">{title}</h2>
                <div className="shop-list__info">
                    <p className="shop-list__results">
                        Showing {(currentSlide - 1) * itemsOnSlide + 1}-
                        {itemsOnSlide * currentSlide > clothesCount
                            ? clothesCount
                            : itemsOnSlide * currentSlide}{' '}
                        of {clothesCount} Products
                    </p>
                    <div className="shop-list__sort">
                        Sort by:{' '}
                        <button className="shop-list__sort-button">
                            {sort}
                            <img src={arrowBottomImage} alt="arrow bottom" />
                        </button>
                        <ul className="shop-list__sort__dropdown">
                            <li>
                                <button
                                    className="shop-list__sort__dropdown-button"
                                    onClick={() =>
                                        appendSearchParam({
                                            sort: 'Most Popular',
                                        })
                                    }
                                >
                                    Most Popular
                                </button>
                            </li>
                            <li>
                                <button
                                    className="shop-list__sort__dropdown-button"
                                    onClick={() =>
                                        appendSearchParam({
                                            sort: 'New',
                                        })
                                    }
                                >
                                    New
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="shop-list__inner">{clothes}</div>
            <hr className="shop-list__hr" />
            <div className="shop-list__triggers">
                <button
                    className="shop-list__left-trigger"
                    onClick={() => setCurrentSlide((slide) => slide - 1)}
                    disabled={currentSlide === 1}
                >
                    <img src={arrowLeftImage} alt="" />
                    Previous
                </button>
                <div className="shop-list__pages-triggers">
                    {Array.from(
                        { length: Math.ceil(clothesCount / itemsOnSlide) },
                        (_, i) => (
                            <button
                                key={i}
                                className={
                                    i + 1 === currentSlide ? 'active' : ''
                                }
                                onClick={() => setCurrentSlide(i + 1)}
                            >
                                {i + 1}
                            </button>
                        )
                    )}
                </div>
                <button
                    className="shop-list__right-trigger"
                    onClick={() => setCurrentSlide((slide) => slide + 1)}
                    disabled={
                        currentSlide >= Math.ceil(clothesCount / itemsOnSlide)
                    }
                >
                    Next
                    <img src={arrowRightImage} alt="" />
                </button>
            </div>
        </section>
    );
};

export default ShopList;
