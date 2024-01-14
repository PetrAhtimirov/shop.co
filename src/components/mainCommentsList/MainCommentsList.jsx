import { useState, useEffect } from 'react';

import CommentCard from '../commentCard/CommentCard';
import useCommentsService from '../../services/CommentsService';

import './mainCommentsList.css';
import arrowLeftImage from './images/arrow-left.svg';
import arrowRightImage from './images/arrow-right.svg';

const MainCommentsList = () => {
    const [curSlide, setCurSlide] = useState(0);
    const [lastGottenSlide, setLastGottenSlide] = useState(-1);
    const [commentsList, setCommentsList] = useState([]);
    const [commentsCount, setCommentsCount] = useState(0);

    const { getSlisedComments, getCommentsCount } = useCommentsService();

    useEffect(() => {
        getCommentsCount().then(setCommentsCount);
    }, [getCommentsCount]);

    useEffect(() => {
        if (curSlide > lastGottenSlide) {
            setLastGottenSlide(curSlide);
            getSlisedComments(
                curSlide ? curSlide * 3 + 1 : 0,
                curSlide * 3 + 4
            ).then(onCommentsListLoaded);
        }
    }, [curSlide]);

    const onCommentsListLoaded = (newCommentsList) => {
        setCommentsList((commentsList) => [
            ...commentsList,
            ...newCommentsList,
        ]);
    };

    const comments = commentsList.map(({ name, verified, score, text }, i) => (
        <div className="main-comments__card-wrapper" key={i}>
            <CommentCard
                name={name}
                verified={verified}
                score={score}
                text={text}
            />
        </div>
    ));

    return (
        <section className="main-comments">
            <div className="container">
                <div className="main-comments__header">
                    <h2 className="main-comments__title">
                        Our happy customers
                    </h2>
                    <div className="main-comments__triggers">
                        <button
                            onClick={() => setCurSlide((slide) => slide - 1)}
                            disabled={curSlide ? null : 'disabled'}
                        >
                            <img src={arrowLeftImage} alt="" />
                        </button>
                        <button
                            onClick={() => setCurSlide((slide) => slide + 1)}
                            disabled={
                                commentsCount - (curSlide * 3 + 4) > 0
                                    ? null
                                    : 'disabled'
                            }
                        >
                            <img src={arrowRightImage} alt="" />
                        </button>
                    </div>
                </div>
                <div
                    className="main-comments__inner"
                    style={{ transform: `translateX(${-1260 * curSlide}px)` }}
                >
                    {comments}
                </div>
            </div>
        </section>
    );
};

export default MainCommentsList;
