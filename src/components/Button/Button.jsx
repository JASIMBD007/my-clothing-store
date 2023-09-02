import React from 'react';
import { BaseButton, GoogleSignInButton, InvertedButton } from './ButtonStyles';

const Button = ({ children, buttonType, ...otherProps }) => {
    let StyledButton;

    switch (buttonType) {
        case 'google':
            StyledButton = GoogleSignInButton;
            break;
        case 'inverted':
            StyledButton = InvertedButton;
            break;
        default:
            StyledButton = BaseButton;
    }

    return (
        <StyledButton {...otherProps}>
            {children}
        </StyledButton>
    );
};

export default Button;
