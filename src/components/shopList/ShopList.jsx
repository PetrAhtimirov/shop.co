import { useState, useEffect } from 'react';

import ClothesCard from '../clothesCard/ClothesCard';
import useClothesService from '../../services/ClothesService';

import './shopList.css';
import arrowLeftImage from './images/arrow-left.svg';
import arrowRightImage from './images/arrow-right.svg';
import arrowBottomImage from './images/arrow-bottom.svg';

const ShopList = () => {
    const [clothesList, setClothesList] = useState([]);
    const [sortType, setSortType] = useState('Most Popular');

    const { getSortedByDateClothes, getSortedBySellsClothes } =
        useClothesService();

    useEffect(() => {
        if (sortType === 'Most Popular') {
            getSortedBySellsClothes(sortType).then(setClothesList);
        }

        if (sortType === 'New') {
            getSortedByDateClothes(sortType).then(setClothesList);
        }
    }, [sortType]);

    const clothes = clothesList.map(
        ({ id, name, score, price, discount, discountPrice, preview }) => (
            <ClothesCard
                key={id}
                name={name}
                score={score}
                price={price}
                discount={discount}
                discountPrice={discountPrice}
                preview={require('../../data/' + preview)}
                link="#"
            />
        )
    );

    return (
        <section className="shop-list">
            <div className="shop-list__header">
                <h2 className="shop-list__title">Catalog</h2>
                <div className="shop-list__info">
                    <p className="shop-list__results">
                        Showing 1-10 of 100 Products
                    </p>
                    <div className="shop-list__sort">
                        Sort by:{' '}
                        <button className="shop-list__sort-button">
                            {sortType}
                            <img src={arrowBottomImage} alt="arrow bottom" />
                        </button>
                        <ul className="shop-list__sort__dropdown">
                            <li>
                                <button
                                    className="shop-list__sort__dropdown-button"
                                    onClick={() => setSortType('Most Popular')}
                                >
                                    Most Popular
                                </button>
                            </li>
                            <li>
                                <button
                                    className="shop-list__sort__dropdown-button"
                                    onClick={() => setSortType('New')}
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
                <button className="shop-list__left-trigger">
                    <img src={arrowLeftImage} alt="" />
                    Previous
                </button>
                <div className="shop-list__pages-triggers">
                    <button className="active">1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                </div>
                <button className="shop-list__right-trigger">
                    Next
                    <img src={arrowRightImage} alt="" />
                </button>
            </div>
        </section>
    );
};

export default ShopList;
