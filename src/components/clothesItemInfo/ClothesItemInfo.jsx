import { useState, useEffect } from 'react';

import Rating from '../rating/Rating';
import useClothesService from '../../services/ClothesService';

import './clothesItemInfo.css';
import plusImage from './images/plus.svg';
import minusImage from './images/minus.svg';

const ClothesItemInfo = ({ id }) => {
    const [curClothesItem, setCurClothesItem] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [counter, setCounter] = useState(1);

    const { getClothesById } = useClothesService();

    useEffect(() => {
        getClothesById(id)
            .then(setCurClothesItem)
            .then(() => setLoaded(true));
    }, []);

    console.log(curClothesItem);

    return (
        <section className="clothes-item-info">
            <div className="container clothes-item-info__container">
                <div className="clothes-item-info__images">
                    <div className="clothes-item-info__side-images">
                        {loaded ? (
                            curClothesItem.images.map((item, i) => (
                                <img
                                    key={i}
                                    src={require('../../data/' + item)}
                                    alt={curClothesItem.name}
                                />
                            ))
                        ) : (
                            <></>
                        )}
                    </div>
                    {loaded ? (
                        <img
                            className="clothes-item-info__main-image"
                            src={require('../../data/' +
                                curClothesItem.images[0])}
                            alt={curClothesItem.name}
                        />
                    ) : (
                        <></>
                    )}
                </div>
                <div className="clothes-item-info__inner">
                    <div className="clothes-item-info__main-info">
                        <h2>{curClothesItem.name}</h2>
                        <Rating score={curClothesItem.score} showScoreNum />
                        <p className="clothes-card__price clothes-item-info__price">
                            {curClothesItem.price}
                            {curClothesItem.discount ? (
                                <>
                                    <span className="clothes-card__discount-price">
                                        {curClothesItem.discountPrice}
                                    </span>
                                    <span className="clothes-card__discount">
                                        -{curClothesItem.discount}
                                    </span>
                                </>
                            ) : null}
                        </p>
                        <p className="clothes-item-info__desc">
                            {curClothesItem.desc}
                        </p>
                    </div>
                    <hr className="clothes-item-info__hr" />
                    <div className="clothes-item-info__item-size">
                        <p className="clothes-item-info__item-size__title">
                            Choose Size
                        </p>
                        <div className="clothes-item-info__size__inner">
                            {loaded ? (
                                curClothesItem.sizes.map((size, i) => (
                                    <div key={i}>
                                        <input
                                            className="clothes-item-info__size__input"
                                            type="radio"
                                            id={size}
                                            name="size"
                                            value={size}
                                        />
                                        <label
                                            className="clothes-item-info__size__label"
                                            htmlFor={size}
                                        >
                                            {size}
                                        </label>
                                    </div>
                                ))
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <hr className="clothes-item-info__hr" />
                    <div className="clothes-item-info__add-to-card">
                        <div className="clothes-item-info__counter">
                            <button
                                onClick={() => setCounter((c) => c - 1)}
                                disabled={counter <= 1}
                            >
                                <img src={minusImage} alt="minus" />
                            </button>
                            <span>{counter}</span>
                            <button
                                onClick={() => setCounter((c) => c + 1)}
                                disabled={counter >= 20}
                            >
                                <img src={plusImage} alt="plus" />
                            </button>
                        </div>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClothesItemInfo;
