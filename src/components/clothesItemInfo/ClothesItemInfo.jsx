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
    const [curSize, setCurSize] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);

    const { getClothesById } = useClothesService();

    const onAddItemInCart = () => {
        const newItem = {
            id: curClothesItem.id,
            name: curClothesItem.name,
            size: curClothesItem.sizes[curSize],
            price: curClothesItem.price,
            discountPrice: curClothesItem.discountPrice,
            preview: curClothesItem.preview,
            count: counter,
        };
        const itemsInCart = localStorage.getItem('itemsInCart');
        if (itemsInCart === null) {
            localStorage.setItem('itemsInCart', JSON.stringify([newItem]));
        } else {
            localStorage.setItem(
                'itemsInCart',
                JSON.stringify([...JSON.parse(itemsInCart), newItem])
            );
        }
    };

    useEffect(() => {
        getClothesById(id)
            .then(setCurClothesItem)
            .then(() => setLoaded(true));
    }, []);

    return (
        <section className="clothes-item-info">
            <div className="clothes-item-info__images">
                <div className="clothes-item-info__side-images">
                    {loaded ? (
                        curClothesItem.images.map((item, i) => (
                            <img
                                className={i === selectedImage ? 'active' : ''}
                                key={i}
                                src={require('../../data/' + item)}
                                alt={curClothesItem.name}
                                onClick={() => setSelectedImage(i)}
                                tabIndex={1}
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
                            curClothesItem.images[selectedImage])}
                        alt={curClothesItem.name}
                    />
                ) : (
                    <></>
                )}
            </div>
            <div className="clothes-item-info__inner">
                <div className="clothes-item-info__main-info">
                    <h2>{curClothesItem.name}</h2>
                    {loaded ? (
                        <Rating score={+curClothesItem.score} showScoreNum />
                    ) : (
                        <></>
                    )}

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
                                        value=""
                                        checked={!!(curSize === i)}
                                        onChange={() => setCurSize(i)}
                                    />
                                    <label
                                        className="clothes-item-info__size__label"
                                        htmlFor={size}
                                        tabIndex={0}
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
                    <button
                        className="clothes-item-info__add-to-card__btn"
                        onClick={(e) => {
                            onAddItemInCart();
                            const btn = e.currentTarget;
                            btn.classList.add('active');
                            setTimeout(() => {
                                btn.classList.remove('active');
                            }, '1000');
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ClothesItemInfo;
