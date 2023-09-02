import './CartIconStyles.jsx';
import cart from '../../assets/cart.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIconStyles.jsx';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon src={cart} className="shopping-icon" alt="logo" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
