import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../Utility/Firebase/firebase.init';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';
import Buttons from '../Buttons/Buttons';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };


    const handleOnSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();

        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('User does not exist!');
                    break;
                case 'uth/wrong-password':
                    alert('Password is Incorrect !');
                    break;
                default:
                    console.log(error);
            }
        }

    }

    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign In With Your Email & Password</span>
            <form onSubmit={handleOnSubmit} >

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

                <div className='buttons-container'>
                    <Buttons type='submit'>Sign In</Buttons>
                    <Buttons type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Buttons>
                </div>
            </form>
        </div>
    )
}

export default SignIn