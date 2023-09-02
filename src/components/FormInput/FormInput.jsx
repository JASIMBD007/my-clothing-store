import React from 'react';
import { FormGroup, FormInput, FormInputLabel } from './FormInputStyles'; // Import the styled components

const FormInputComponent = ({ label, ...otherProps }) => {
    return (
        <FormGroup>
            <FormInput {...otherProps} />
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </FormGroup>
    );
};

export default FormInputComponent;
