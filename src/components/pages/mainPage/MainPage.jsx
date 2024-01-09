import AppNotice from '../../appNotice/AppNotice';
import AppHeader from '../../appHeader/AppHeader';
import MainBanner from '../../mainBanner/MainBanner';
import RunningBrands from '../../runningBrands/RunningBrands';

import './mainPage.css';
const MainPage = () => {
    return (
        <>
            <AppNotice />
            <AppHeader />
            <MainBanner />
            <RunningBrands />
        </>
    );
};

export default MainPage;
