import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ClothesCard from '../clothesCard/ClothesCard';
import useClothesService from '../../services/ClothesService';

import './mainClothesList.css';

const MainClothesList = ({
    title,
    newArrivals = false,
    topSelling = false,
}) => {
    const [clothesList, setClothesList] = useState([]);

    const { getSortedByDateClothes, getSortedBySellsClothes } =
        useClothesService();

    useEffect(() => {
        if (newArrivals) {
            getSortedByDateClothes().then((data) =>
                setClothesList(data.slice(0, 4))
            );
        }

        if (topSelling) {
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

    return (
        <section className="main-clothes">
            <h2 className="main-clothes__title">{title}</h2>
            <div className="container main-clothes__list">{clothes}</div>
            <Link to="#" className="main-clothes__link">
                View All
            </Link>
        </section>
    );
};

export default MainClothesList;
