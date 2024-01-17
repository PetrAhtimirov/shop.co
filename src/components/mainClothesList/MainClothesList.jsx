import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ClothesCard from '../clothesCard/ClothesCard';
import useClothesService from '../../services/ClothesService';

import './mainClothesList.css';

const MainClothesList = ({ title, newArrivals = false }) => {
    const [clothesList, setClothesList] = useState([]);

    const { getNewArrivals } = useClothesService();

    useEffect(() => {
        getNewArrivals().then(setClothesList);
    }, []);

    const clothes = clothesList.map(({ id, name, score, price, preview }) => (
        <ClothesCard
            key={id}
            name={name}
            score={score}
            price={price}
            preview={'../../data/' + preview}
            link="#"
        />
    ));

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
