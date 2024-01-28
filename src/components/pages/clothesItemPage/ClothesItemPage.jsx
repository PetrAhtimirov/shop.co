import { useParams } from 'react-router-dom';

import AppNotice from '../../appNotice/AppNotice';
import AppHeader from '../../appHeader/AppHeader';
import BreadCrumbs from '../../breadCrumbs/BreadCrumbs';
import ClothesItemInfo from '../../clothesItemInfo/ClothesItemInfo';
import AppFooter from '../../appFooter/AppFooter';

import './clothesItemPage.css';

const ClothesItemPage = ({ addItemInCart }) => {
    const { id } = useParams();
    return (
        <>
            <AppNotice />
            <AppHeader />
            <div className="container">
                <hr className="header-hr" />
                <BreadCrumbs />
            </div>
            <ClothesItemInfo id={id} />
            {/* <AppFooter /> */}
        </>
    );
};

export default ClothesItemPage;
