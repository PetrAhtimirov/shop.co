import { useSearchParams } from 'react-router-dom';

import AppNotice from '../../appNotice/AppNotice';
import AppHeader from '../../appHeader/AppHeader';
import BreadCrumbs from '../../breadCrumbs/BreadCrumbs';
import ShopList from '../../shopList/ShopList';
import AppFooter from '../../appFooter/AppFooter';

import './searchPage.css';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    return (
        <>
            <AppNotice />
            <AppHeader />
            <div className="container search-page__container">
                <hr className="header-hr" />
                <BreadCrumbs />
                <ShopList
                    title={`Found by the query "${query}"`}
                    sort="Most Popular"
                    filter={{ query: query }}
                    itemsOnSlide={12}
                />
            </div>
            <AppFooter />
        </>
    );
};

export default SearchPage;