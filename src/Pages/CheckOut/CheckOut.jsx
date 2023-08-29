import React, { useContext } from 'react'
import './CheckOut.scss';
import { CartContext } from '../../contexts/cartContext';

const CheckOut = () => {
    const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);
    return (
        <div>
            {
                cartItems.map((cartItem) => {
                    const { id, name, quantity } = cartItem;
                    return <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                        <br />
                        <span onClick={() => removeItemToCart(cartItem)} >decrement</span>
                        <br />
                        <span onClick={() => addItemToCart(cartItem)} >increment</span>
                    </div>
                })
            }
        </div>
    )
}

export default CheckOut