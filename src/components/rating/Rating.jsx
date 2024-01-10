import './rating.css';
import starImage from './images/star.svg';

const Rating = ({ score, showScoreNum }) => {
    const calcStarsWidth = score * 19 + Math.ceil(score - 1) * 5.3;

    return (
        <div className="rating">
            <div className="rating__stars" style={{ width: calcStarsWidth }}>
                <img src={starImage} alt="star" />
                <img src={starImage} alt="star" />
                <img src={starImage} alt="star" />
                <img src={starImage} alt="star" />
                <img src={starImage} alt="star" />
            </div>
            {showScoreNum ? (
                <span>
                    {score}/<span className="rating__out-of">5</span>
                </span>
            ) : null}
        </div>
    );
};

export default Rating;
