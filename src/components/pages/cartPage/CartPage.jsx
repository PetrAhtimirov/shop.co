import AppNotice from '../../appNotice/AppNotice';
import AppHeader from '../../appHeader/AppHeader';
import BreadCrumbs from '../../breadCrumbs/BreadCrumbs';

import './cartPage.css';

const CartPage = () => {
    return (
        <>
            <AppNotice />
            <AppHeader />
            <div className="container">
                <hr className="header-hr" />
                <BreadCrumbs />
                <h2 className="cart__header">Your Cart</h2>
            </div>
        </>
    );
};

export default CartPage;
