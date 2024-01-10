import Rating from '../rating/Rating';
import { Link } from 'react-router-dom';

import './clothesCard.css';

const ClothesCard = ({ name, score, price, preview, link }) => {
    return (
        <Link className="clothes-card__link" to={link}>
            <div className="clothes-card">
                <img
                    className="clothes-card__image"
                    src={preview}
                    alt="T-shirt with tape details"
                />
                <h3 className="clothes-card__title">{name}</h3>
                <Rating score={score} showScoreNum />
                <p className="clothes-card__price">{price}</p>
            </div>
        </Link>
    );
};

export default ClothesCard;
