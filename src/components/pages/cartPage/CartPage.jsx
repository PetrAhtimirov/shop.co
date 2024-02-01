import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import AppNotice from '../../appNotice/AppNotice';
import AppHeader from '../../appHeader/AppHeader';
import BreadCrumbs from '../../breadCrumbs/BreadCrumbs';
import CartClothesList from '../../cartClothesList/CartClothesList';
import CartOrder from '../../cartOrder/CartOrder';
import AppFooter from '../../appFooter/AppFooter';

import './cartPage.css';

const CartPage = () => {
    const [clothesList, setClothesList] = useState(
        JSON.parse(localStorage.getItem('itemsInCart')) || []
    );

    useEffect(() => {
        localStorage.setItem('itemsInCart', JSON.stringify(clothesList));
    }, [clothesList]);
    return (
        <>
            <Helmet>
                <meta name="description" content="Page with your shop cart" />
                <title>Cart page</title>
            </Helmet>
            <AppNotice />
            <AppHeader />
            <div className="container">
                <hr className="header-hr" />
                <BreadCrumbs
                    linksList={[
                        { name: 'Home', link: '/' },
                        { name: 'Cart', link: '/cart' },
                    ]}
                />
                <h2 className="cart__header">Your Cart</h2>
                <div className="cart__inner">
                    <CartClothesList
                        clothesList={clothesList}
                        setClothesList={setClothesList}
                    />
                    <CartOrder clothesList={clothesList} />
                </div>
            </div>
            <AppFooter />
        </>
    );
};

export default CartPage;
