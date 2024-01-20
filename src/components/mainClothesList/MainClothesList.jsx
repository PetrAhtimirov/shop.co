import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ClothesCard from '../clothesCard/ClothesCard';
import useClothesService from '../../services/ClothesService';

import './mainClothesList.css';
import leftArrowImage from './images/arrow-left.svg';

const MainClothesList = ({ title }) => {
    const [clothesList, setClothesList] = useState([]);

    const { getSortedByDateClothes, getSortedBySellsClothes } =
        useClothesService();

    useEffect(() => {
        if (title === 'New Arrivals') {
            getSortedByDateClothes().then((data) =>
                setClothesList(data.slice(0, 4))
            );
        }

        if (title === 'Top Selling') {
            getSortedBySellsClothes().then((data) =>
                setClothesList(data.slice(0, 4))
            );
        }
    }, []);

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

    const link =
        title === 'New Arrivals'
            ? '/shop?sort=New'
            : title === 'Top Selling'
            ? '/shop?sort=Most+Popular'
            : '#';

    return (
        <section className="main-clothes">
            <h2 className="main-clothes__title">{title}</h2>
            <div className="container main-clothes__list">{clothes}</div>
            <Link to={link} className="main-clothes__link">
                <span>View All</span>
                <img
                    className="main-clothes__link__arrow"
                    src={leftArrowImage}
                    alt="Left arrow"
                />
            </Link>
        </section>
    );
};

export default MainClothesList;
