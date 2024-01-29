import './newsLetterSub.css';
import mainImage from './images/mail.svg';

const NewsLetterSub = () => {
    return (
        <div className="news-letter-sub">
            <h2 className="news-letter-sub__slogan">
                Stay upto date about our latest offers
            </h2>
            <form className="news-letter-sub__form">
                <div
                    className="news-letter-sub__input-wrapper"
                    onFocus={(e) => e.currentTarget.classList.add('focus')}
                    onBlur={(e) => e.currentTarget.classList.remove('focus')}
                >
                    <img src={mainImage} alt="mail" />
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter your email address"
                    />
                </div>
                <button
                    className="news-letter-sub__submit"
                    type="submit"
                    onClick={(e) => e.preventDefault()}
                >
                    Subscribe to Newsletter
                </button>
            </form>
        </div>
    );
};

export default NewsLetterSub;
