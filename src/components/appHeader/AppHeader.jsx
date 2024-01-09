import { Link } from 'react-router-dom';

import './appHeader.css';
import searchImage from '../../resources/icons/search.svg';
import cartImage from '../../resources/icons/cart.svg';
import userImage from '../../resources/icons/user.svg';

const AppHeader = () => {
    return (
        <header>
            <div className="header__inner container">
                <Link to="/">
                    <h1 className="header__title">Shop.co</h1>
                </Link>
                <nav className="main-nav">
                    <ul className="main-nav__list">
                        <li className="list__item">
                            <Link to="#">Shop</Link>
                        </li>
                        <li className="list__item">
                            <Link to="#">On Sale</Link>
                        </li>
                        <li className="list__item">
                            <Link to="#">New Arrivals</Link>
                        </li>
                        <li className="list__item">
                            <Link to="#">Brands</Link>
                        </li>
                    </ul>
                </nav>
                <form className="search">
                    <img src={searchImage} alt="Search" />
                    <input
                        className="search__input"
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search for products..."
                    />
                </form>
                <nav className="menu-nav">
                    <ul className="menu-nav__list">
                        <li className="list__item">
                            <Link to="#">
                                <img src={cartImage} alt="Shopping cart" />
                            </Link>
                        </li>
                        <li className="list__item">
                            <Link to="#">
                                <img src={userImage} alt="User" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;
