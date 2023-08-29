import React, { useContext } from 'react';
import './CartDropDown.scss';
import Button from '../Button/Button';
import { CartContext } from '../../contexts/cartContext';
import CartItem from '../CartItem/CartItem';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            cartItem={item}
                        />
                    ))
                }

            </div>
            <div className='checkout-button-container'>
                <Button>GO TO CHECKOUT</Button>
            </div>
        </div>
    );
}

export default CartDropDown;
