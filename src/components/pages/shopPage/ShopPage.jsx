import AppHeader from '../../appHeader/AppHeader';
import AppNotice from '../../appNotice/AppNotice';
import BreadCrumbs from '../../breadCrumbs/BreadCrumbs';
import Filters from '../../filters/Filters';
import ShopList from '../../shopList/ShopList';
import AppFooter from '../../appFooter/AppFooter';

import './shopPage.css';

const ShopPage = () => {
    return (
        <>
            <AppNotice />
            <AppHeader />
            <div className="container">
                <hr className="header-hr" />
                <BreadCrumbs />
                <div className="shop-page__content">
                    <Filters />
                    <ShopList />
                </div>
            </div>
            <AppFooter />
        </>
    );
};

export default ShopPage;
