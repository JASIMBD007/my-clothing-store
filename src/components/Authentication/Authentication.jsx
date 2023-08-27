import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import './Authentication.scss';

const Authentication = () => {

    return (
        <div className='authentication'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication