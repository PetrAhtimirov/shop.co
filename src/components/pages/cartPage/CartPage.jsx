import { useState } from 'react';

import AppNotice from '../../appNotice/AppNotice';
import AppHeader from '../../appHeader/AppHeader';
import BreadCrumbs from '../../breadCrumbs/BreadCrumbs';
import CartClothesList from '../../cartClothesList/CartClothesList';
import CartOrder from '../../cartOrder/CartOrder';

import './cartPage.css';

const CartPage = () => {
    const [itemsInCart, setItemsInCart] = useState([
        {
            id: 1,
            type: 'T-shirt',
            name: 'T-shirt with tape details',
            desc: 'Comfortable t-shirt with tape details. Suitable for casual wear.',
            style: 'Casual',
            score: 4.5,
            price: '$120',
            preview: 'clothes/images/1.png',
            images: ['clothes/images/1.png'],
            sells: 100,
            discount: null,
            discountPrice: null,
            date: '2024-01-03',
            sizes: [
                'XX-Small',
                'X-Small',
                'Small',
                'Medium',
                'Large',
                'X-Large',
                'XX-Large',
                '3X-Large',
                '4X-Large',
            ],
        },
        {
            id: 2,
            type: 'Jeans',
            name: 'Skinny Fit Jeans',
            desc: 'Jeans with a skinny fit. Suitable for casual wear.',
            style: 'Casual',
            score: 3.5,
            price: '$240',
            preview: 'clothes/images/2.png',
            images: ['clothes/images/2.png'],
            sells: 40,
            discount: '10%',
            discountPrice: '$260',
            date: '2024-01-03',
            sizes: [
                'Medium',
                'Large',
                'X-Large',
                'XX-Large',
                '3X-Large',
                '4X-Large',
            ],
        },
    ]);
    return (
        <>
            <AppNotice />
            <AppHeader />
            <div className="container">
                <hr className="header-hr" />
                <BreadCrumbs />
                <h2 className="cart__header">Your Cart</h2>
                <div className="cart__inner">
                    <CartClothesList clothesList={itemsInCart} />
                    <CartOrder />
                </div>
            </div>
        </>
    );
};

export default CartPage;
