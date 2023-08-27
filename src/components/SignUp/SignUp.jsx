import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../Utility/Firebase/firebase.init';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

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
        <div>
            <h1>Sign Up With Your Email & Password</h1>
            <form onSubmit={handleOnSubmit} >
                <label>Display Name</label>
                <input required type="text" onChange={handleOnChange} name='displayName' value={displayName} />

                <label>Email</label>
                <input required type="email" onChange={handleOnChange} name='email' value={email} />

                <label>Password</label>
                <input required type="password" onChange={handleOnChange} name='password' value={password} />

                <label>Confirm Password</label>
                <input required type="password" onChange={handleOnChange} name='confirmPassword' value={confirmPassword} />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp