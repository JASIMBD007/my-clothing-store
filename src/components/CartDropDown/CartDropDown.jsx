import React, { useContext } from 'react';
import './CartDropDown.scss';
import Button from '../Button/Button';
import { CartContext } from '../../contexts/cartContext';
import CartItem from '../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckOut = () => {
        navigate('/checkout');
    }

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
                <Button onClick={handleCheckOut} >GO TO CHECKOUT</Button>
            </div>
        </div>
    );
}

export default CartDropDown;
