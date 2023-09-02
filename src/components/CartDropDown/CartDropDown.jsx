import React, { useContext } from 'react';
import './CartDropDownStyles.jsx';
import Button from '../Button/Button';
import { CartContext } from '../../contexts/cartContext';
import CartItem from '../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItems, CheckoutButtonContainer, EmptyMessage } from './CartDropDownStyles.jsx';

const CartDropDown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckOut = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            cartItem={item}
                        />
                    ))
                    ) :
                        (
                            <EmptyMessage>Your Cart Is Empty !</EmptyMessage>
                        )
                }
            </CartItems>
            <CheckoutButtonContainer>
                <Button onClick={handleCheckOut} >GO TO CHECKOUT</Button>
            </CheckoutButtonContainer>
        </CartDropdownContainer>
    );
}

export default CartDropDown;
