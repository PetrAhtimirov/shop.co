import AppNotice from '../../appNotice/AppNotice';
import AppHeader from '../../appHeader/AppHeader';
import MainBanner from '../../mainBanner/MainBanner';
import RunningBrands from '../../runningBrands/RunningBrands';
import MainClothesList from '../../mainClothesList/MainClothesList';
import MainDressStyles from '../../mainDressStyles/MainDressStyles';

import './mainPage.css';
const MainPage = () => {
    return (
        <>
            <AppNotice />
            <AppHeader />
            <MainBanner />
            <RunningBrands />
            <MainClothesList title="New Arrivals" />
            <div className="container">
                <hr className="main__lists-hr" />
            </div>
            <MainClothesList title="Top selling" />
            <MainDressStyles />
        </>
    );
};

export default MainPage;
