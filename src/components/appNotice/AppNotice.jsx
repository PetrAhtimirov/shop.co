import { useState } from 'react';
import { Link } from 'react-router-dom';

import './appNotice.css';
import closeImage from '../../resources/icons/close.svg';

const AppNotice = () => {
    const [show, setShow] = useState(true);

    return show ? (
        <div className="notice">
            <div className="notice__inner container">
                <p className="notice__message">
                    Sign up and get 20% off to your first order.{' '}
                    <Link to="#">Sign Up Now</Link>
                </p>
                <button
                    className="notice__close-button"
                    onClick={() => setShow(false)}
                >
                    <img src={closeImage} alt="Close notice" />
                </button>
            </div>
        </div>
    ) : null;
};

export default AppNotice;
