import { Link } from 'react-router-dom';

import './breadCrumbs.css';
import rightArrowImage from './images/right-arrow.svg';

const BreadCrumbs = () => {
    return (
        <div className="breadcrumbs">
            <Link className="breadcrumbs__link" to="/">
                Home
            </Link>
            <img className="breadcrumbs__arrow" src={rightArrowImage} alt="" />
            <Link className="breadcrumbs__link" to="/">
                Shop
            </Link>
        </div>
    );
};

export default BreadCrumbs;
