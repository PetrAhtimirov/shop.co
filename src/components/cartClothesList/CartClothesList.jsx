import './cartClothesList.css';
import trashcanImage from './images/trashcan.svg';
import minusImage from './images/minus.svg';
import plusImage from './images/plus.svg';

const CartClothesList = ({ clothesList, setClothesList }) => {
    const onDeleteItemInCart = (i) => {
        setClothesList((arr) => arr.filter((item, j) => j !== i));
    };

    const onIncCounter = (i) => {
        let updList = [...clothesList];
        updList[i].count = updList[i].count + 1;
        setClothesList(updList);
    };

    const onDecCounter = (i) => {
        let updList = [...clothesList];
        updList[i].count = updList[i].count - 1;
        setClothesList(updList);
    };

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
                                        {item.size}
                                    </p>
                                </div>
                                <p className="cart__clothes-item__price">
                                    ${+item.price.slice(1) * +item.count}
                                </p>
                            </div>
                        </div>
                        <div className="cart__clothes-item__control">
                            <button className="cart_clothes-item__delete">
                                <img
                                    src={trashcanImage}
                                    alt="delete"
                                    onClick={() => onDeleteItemInCart(i)}
                                />
                            </button>
                            <div className="cart__clothes-item__counter">
                                <button
                                    disabled={
                                        clothesList[i].count <= 1
                                            ? 'disabled'
                                            : null
                                    }
                                    onClick={() => onDecCounter(i)}
                                >
                                    <img src={minusImage} alt="minus" />
                                </button>
                                <span>{item.count}</span>
                                <button
                                    disabled={
                                        clothesList[i].count >= 20
                                            ? 'disabled'
                                            : null
                                    }
                                    onClick={() => onIncCounter(i)}
                                >
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
