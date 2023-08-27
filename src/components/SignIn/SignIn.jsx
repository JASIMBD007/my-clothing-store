import {
    signInWithGooglePopup, createUserDocumentFromAuth
} from '../../Utility/Firebase/firebase.init';
import SignUp from '../SignUp/SignUp';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>
            <SignUp />
        </div>
    )
}

export default SignIn