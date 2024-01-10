import { Link } from 'react-router-dom';

import ClothesCard from '../clothesCard/ClothesCard';

import './mainClothesList.css';
import clothesExample from '../../resources/images/clothesItem.png';

const MainClothesList = ({ title }) => {
    return (
        <section className="main-clothes">
            <h2 className="main-clothes__title">New Arrivals</h2>
            <div className="container main-clothes__list">
                <ClothesCard
                    name="T-shirt with tape details"
                    score={4.5}
                    price="$120"
                    preview={clothesExample}
                    link="#"
                />
                <ClothesCard
                    name="T-shirt with tape details"
                    score={4.5}
                    price="$120"
                    preview={clothesExample}
                    link="#"
                />
                <ClothesCard
                    name="T-shirt with tape details"
                    score={4.5}
                    price="$120"
                    preview={clothesExample}
                    link="#"
                />
                <ClothesCard
                    name="T-shirt with tape details"
                    score={4.5}
                    price="$120"
                    preview={clothesExample}
                    link="#"
                />
            </div>
            <Link to="#" className="main-clothes__link">
                View All
            </Link>
        </section>
    );
};

export default MainClothesList;
