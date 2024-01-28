import './cartOrder.css';
import ticketImage from './images/ticket.svg';

const CartOrder = ({ clothesList }) => {
    const calcSubtotal = () => {
        let sum = 0;
        clothesList.forEach((item) => {
            if (item.discountPrice) {
                sum += +item.discountPrice.slice(1) * +item.count;
            } else {
                sum += +item.price.slice(1) * +item.count;
            }
        });
        return sum;
    };

    const calcDiscount = () => {
        let sum = 0;
        clothesList.forEach((item) => {
            if (item.discountPrice) {
                sum +=
                    (+item.discountPrice.slice(1) - +item.price.slice(1)) *
                    +item.count;
            }
        });
        return sum;
    };

    return (
        <div className="cart__order">
            <h2 className="cart__order__title">Order Summary</h2>
            <p className="cart__order__data">
                Subtotal<span>${calcSubtotal()}</span>
            </p>
            <p className="cart__order__data">
                Discount
                <span className="cart__order__data__discount">
                    -${calcDiscount()}
                </span>
            </p>
            <p className="cart__order__data">
                Delivery Fee<span>$40</span>
            </p>
            <hr className="cart__order__hr" />
            <p className="cart__order__data black">
                Total<span>${calcSubtotal() - calcDiscount() + 40}</span>
            </p>
            <div className="cart__order__promocode">
                <div className="cart__order__promocode__inner">
                    <img src={ticketImage} alt="" />
                    <input type="text" placeholder="Add promo code" />
                </div>
                <button>Apply</button>
            </div>
        </div>
    );
};

export default CartOrder;
