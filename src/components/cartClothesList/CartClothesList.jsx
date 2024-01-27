import { useState } from 'react';

import './cartClothesList.css';
import trashcanImage from './images/trashcan.svg';
import minusImage from './images/minus.svg';
import plusImage from './images/plus.svg';

const CartClothesList = ({ clothesList }) => {
    return (
        <div className="cart__clothes-list">
            {clothesList.map((item, i) => (
                <div key={i}>
                    {i !== 0 ? <hr className="cart__clothes-list__hr" /> : null}
                    <div className="cart__clothes-item">
                        <div className="cart__clothes-item__data">
                            <img
                                src={require('../../data/' + item.preview)}
                                alt={item.name}
                            />
                            <div className="cart__clothes-item__info">
                                <div>
                                    <h3 className="cart__clothes-item__title">
                                        {item.name}
                                    </h3>
                                    <p className="cart__clothes-item__size">
                                        <span>Size: </span>
                                        Large
                                    </p>
                                </div>
                                <p className="cart__clothes-item__price">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                        <div className="cart__clothes-item__control">
                            <button className="cart_clothes-item__delete">
                                <img src={trashcanImage} alt="delete" />
                            </button>
                            <div className="cart__clothes-item__counter">
                                <button>
                                    <img src={minusImage} alt="minus" />
                                </button>
                                <span>1</span>
                                <button>
                                    <img src={plusImage} alt="plus" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartClothesList;
