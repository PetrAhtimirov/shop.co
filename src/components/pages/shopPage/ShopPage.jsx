import { useSearchParams } from 'react-router-dom';

import AppHeader from '../../appHeader/AppHeader';
import AppNotice from '../../appNotice/AppNotice';
import BreadCrumbs from '../../breadCrumbs/BreadCrumbs';
import Filters from '../../filters/Filters';
import ShopList from '../../shopList/ShopList';
import AppFooter from '../../appFooter/AppFooter';
import ScrollToTop from '../../scrollToTop/ScrollToTop';

import './shopPage.css';

const ShopPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const urlSort = { sort: searchParams.get('sort') || 'Most Popular' };
    const urlFilter = {
        ...(searchParams.get('type') ? { type: searchParams.get('type') } : {}),
        ...(searchParams.get('style')
            ? { style: searchParams.get('style') }
            : {}),
        ...(searchParams.get('minPrice')
            ? { minPrice: searchParams.get('minPrice') }
            : {}),
        ...(searchParams.get('maxPrice')
            ? { maxPrice: searchParams.get('maxPrice') }
            : {}),
        ...(searchParams.getAll('size')
            ? { size: searchParams.getAll('size') }
            : {}),
    };

    const appendSearchParam = (param) => {
        setSearchParams({ ...urlSort, ...urlFilter, ...param });
    };

    const deleteSearchParam = (paramName) => {
        searchParams.delete(paramName);
        setSearchParams(searchParams);
    };

    return (
        <>
            <ScrollToTop />
            <AppNotice />
            <AppHeader />
            <div className="container">
                <hr className="header-hr" />
                <BreadCrumbs
                    linksList={[
                        { name: 'Home', link: '/' },
                        { name: 'Shop', link: '/shop' },
                    ]}
                />
                <div className="shop-page__content">
                    <Filters
                        filter={urlFilter}
                        appendSearchParam={appendSearchParam}
                        deleteSearchParam={deleteSearchParam}
                    />
                    <ShopList
                        title="Catalog"
                        sort={urlSort.sort}
                        filter={urlFilter}
                        appendSearchParam={appendSearchParam}
                    />
                </div>
            </div>
            <AppFooter />
        </>
    );
};

export default ShopPage;
