import { Link, NavLink, useNavigate } from 'react-router-dom';

import './appHeader.css';
import searchImage from '../../resources/icons/search.svg';
import cartImage from '../../resources/icons/cart.svg';
import userImage from '../../resources/icons/user.svg';

const AppHeader = () => {
    let navigate = useNavigate();
    return (
        <header>
            <div className="header__inner container">
                <h1 className="header__title">
                    <Link to="/">Shop.co</Link>
                </h1>

                <nav className="main-nav">
                    <ul className="main-nav__list">
                        <li className="main-nav__item">
                            <NavLink to="/shop">Shop</NavLink>
                        </li>
                        <li className="main-nav__item">
                            <NavLink className="dis" to="#">
                                On Sale
                            </NavLink>
                        </li>
                        <li className="main-nav__item">
                            <NavLink className="dis" to="#">
                                New Arrivals
                            </NavLink>
                        </li>
                        <li className="main-nav__item">
                            <NavLink className="dis" to="#">
                                Brands
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <form
                    className="search"
                    onFocus={(e) => e.currentTarget.classList.add('focus')}
                    onBlur={(e) => e.currentTarget.classList.remove('focus')}
                    onSubmit={(e) => {
                        e.preventDefault();
                        const inputValue =
                            e.currentTarget.querySelector('input').value;
                        return navigate(`/search?query=${inputValue}`);
                    }}
                >
                    <img src={searchImage} alt="Search" />
                    <input
                        className="search__input"
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search for products..."
                        autoComplete="off"
                    />
                </form>
                <nav className="menu-nav">
                    <ul className="menu-nav__list">
                        <li className="menu-nav__item">
                            <Link to="/cart">
                                <img src={cartImage} alt="Shopping cart" />
                            </Link>
                        </li>
                        <li className="menu-nav__item">
                            <Link className="dis" to="#">
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
