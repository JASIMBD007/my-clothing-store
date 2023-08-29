import React from 'react';
import './CartDropDown.scss';
import Button from '../Button/Button';

const CartDropDown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {/* Your cart items content */}
            </div>
            <div className='checkout-button-container'>
                <Button>GO TO CHECKOUT</Button>
            </div>
        </div>
    );
}

export default CartDropDown;
