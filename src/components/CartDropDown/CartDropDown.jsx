import React from 'react'
import './CartDropDown.scss'
import Buttons from '../Buttons/Buttons'

const CartDropDown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <Buttons>GO TO CHECKOUT</Buttons>
            </div>
        </div>
    )
}

export default CartDropDown