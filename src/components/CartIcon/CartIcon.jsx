import './CartIcon.scss';
import cart from '../../assets/cart.svg';

const CartIcon = () => {
    return (
        <div className='cart-icon-container'>
            <img src={cart} className="shopping-icon" alt="logo" />
            <span className='item-count'>0</span>
        </div>
    );
};

export default CartIcon;
