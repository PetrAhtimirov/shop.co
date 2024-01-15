import AppHeader from '../../appHeader/AppHeader';
import AppNotice from '../../appNotice/AppNotice';
import BreadCrumbs from '../../breadCrumbs/BreadCrumbs';
import Filters from '../../filters/Filters';

import './shopPage.css';

const ShopPage = () => {
    return (
        <>
            <AppNotice />
            <AppHeader />
            <div className="container">
                <hr className="header-hr" />
                <BreadCrumbs />
                <Filters />
            </div>
        </>
    );
};

export default ShopPage;
