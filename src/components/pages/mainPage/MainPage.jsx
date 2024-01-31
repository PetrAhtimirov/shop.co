import { Helmet } from 'react-helmet';

import AppNotice from '../../appNotice/AppNotice';
import AppHeader from '../../appHeader/AppHeader';
import MainBanner from '../../mainBanner/MainBanner';
import RunningBrands from '../../runningBrands/RunningBrands';
import MainClothesList from '../../mainClothesList/MainClothesList';
import MainDressStyles from '../../mainDressStyles/MainDressStyles';
import MainCommentsList from '../../mainCommentsList/MainCommentsList';
import AppFooter from '../../appFooter/AppFooter';
import ScrollToTop from '../../scrollToTop/ScrollToTop';

import './mainPage.css';
const MainPage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Main page" />
                <title>Shop.co</title>
            </Helmet>
            <ScrollToTop />
            <AppNotice />
            <AppHeader />
            <MainBanner />
            <RunningBrands />
            <MainClothesList title="New Arrivals" sort="New" />
            <div className="container">
                <hr className="main__lists-hr" />
            </div>
            <MainClothesList title="Top Selling" sort="Most Popular" />
            <MainDressStyles />
            <MainCommentsList />
            <AppFooter />
        </>
    );
};

export default MainPage;
