import CommentCard from '../commentCard/CommentCard';

import './mainCommentsList.css';
import arrowLeftImage from './images/arrow-left.svg';
import arrowRightImage from './images/arrow-right.svg';

const MainCommentsList = () => {
    const comments = [
        {
            name: 'Sarah M.',
            verified: true,
            score: 5,
            text: '"I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations."',
        },
        {
            name: 'Sarah M.',
            verified: true,
            score: 5,
            text: '"I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations."',
        },
        {
            name: 'Sarah M.',
            verified: true,
            score: 5,
            text: '"I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations."',
        },
    ];

    return (
        <section className="main-comments">
            <div className="container">
                <div className="main-comments__header">
                    <h2 className="main-comments__title">
                        Our happy customers
                    </h2>
                    <div className="main-comments__triggers">
                        <button>
                            <img src={arrowLeftImage} alt="" />
                        </button>
                        <button>
                            <img src={arrowRightImage} alt="" />
                        </button>
                    </div>
                </div>
                <div className="main-comments__inner">
                    {comments.map(({ name, verified, score, text }, i) => (
                        <div className="main-comments__card-wrapper" key={i}>
                            <CommentCard
                                name={name}
                                verified={verified}
                                score={score}
                                text={text}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainCommentsList;
