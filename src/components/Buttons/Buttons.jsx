import React from 'react'
import './Buttons.scss'
const buttonTypeClasses = {
    google: 'google-sign-in',
    inverted: 'inverted'
}
const Buttons = ({ children, buttonType, ...otherProps }) => {
    return (
        <div>
            <button className={`button-container ${buttonTypeClasses[buttonType]}`}
                {...otherProps}
            >{children}</button>
        </div>
    )
}

export default Buttons