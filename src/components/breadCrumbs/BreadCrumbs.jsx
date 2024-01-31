import { Link } from 'react-router-dom';

import './breadCrumbs.css';
import rightArrowImage from './images/right-arrow.svg';

const BreadCrumbs = ({ linksList }) => {
    return (
        <div className="breadcrumbs">
            {linksList.map((item, i) => {
                if (i + 1 !== linksList.length) {
                    return (
                        <div key={i}>
                            <Link className="breadcrumbs__link" to={item.link}>
                                {item.name}
                            </Link>
                            <img
                                className="breadcrumbs__arrow"
                                src={rightArrowImage}
                                alt=""
                            />
                        </div>
                    );
                } else {
                    return (
                        <div key={i}>
                            <Link className="breadcrumbs__link" to={item.link}>
                                {item.name}
                            </Link>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default BreadCrumbs;
