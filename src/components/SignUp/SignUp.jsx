import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../Utility/Firebase/firebase.init';
import FormInput from '../FormInput/FormInput';
import './SignUp.scss';
import Button from '../Button/Button';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user,email already in use')
            }
            else {
                console.log('user creation encountered an error', error);
            }
        }

    }

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign Up With Your Email & Password</span>
            <form onSubmit={handleOnSubmit} >

                <FormInput
                    label='Display Name'
                    required
                    type="text"
                    onChange={handleOnChange} name='displayName'
                    value={displayName} />

                <FormInput
                    label='Email'
                    required type="email"
                    onChange={handleOnChange} name='email'
                    value={email} />

                <FormInput
                    label='Password'
                    required
                    type="password"
                    onChange={handleOnChange} name='password'
                    value={password} />

                <FormInput
                    label='Confirm Password'
                    required
                    type="password"
                    onChange={handleOnChange} name='confirmPassword'
                    value={confirmPassword} />

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp