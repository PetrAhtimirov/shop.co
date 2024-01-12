import Rating from '../rating/Rating';

import './commentCard.css';
import checkImage from './images/check.svg';

const CommentCard = ({ name, verified, score, text }) => {
    return (
        <div className="comment-card">
            <Rating score={score} />
            <div className="comment-card__username">
                <h3 className="">{name}</h3>
                {verified ? <img src={checkImage} alt="check" /> : null}
            </div>
            <p className="comment-card__text">{text}</p>
        </div>
    );
};

export default CommentCard;
