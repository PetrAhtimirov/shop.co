import Rating from '../rating/Rating';
import { Link } from 'react-router-dom';

import './clothesCard.css';

const ClothesCard = ({
    id,
    name,
    score,
    price,
    discount,
    discountPrice,
    preview,
}) => {
    return (
        <Link className="clothes-card__link" to={`/clothesItem/${id}`}>
            <div className="clothes-card">
                <img
                    className="clothes-card__image"
                    src={preview}
                    alt="T-shirt with tape details"
                />
                <h3 className="clothes-card__title">{name}</h3>
                <Rating score={score} showScoreNum />
                <p className="clothes-card__price">
                    {price}
                    {discount ? (
                        <>
                            <span className="clothes-card__discount-price">
                                {discountPrice}
                            </span>
                            <span className="clothes-card__discount">
                                -{discount}
                            </span>
                        </>
                    ) : null}
                </p>
            </div>
        </Link>
    );
};

export default ClothesCard;
