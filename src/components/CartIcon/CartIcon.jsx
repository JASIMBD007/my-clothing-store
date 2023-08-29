import './CartIcon.scss';
import cart from '../../assets/cart.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <img src={cart} className="shopping-icon" alt="logo" />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
};

export default CartIcon;
