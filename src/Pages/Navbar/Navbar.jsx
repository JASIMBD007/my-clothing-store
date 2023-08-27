import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import crown from '../../assets/crown.svg';
import './Navbar.scss'
import { UserContext } from '../../contexts/userContext';
import { signOutUser } from '../../Utility/Firebase/firebase.init';

const Navbar = () => {

    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <img src={crown} className="logo" alt="logo" />

                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to="/shop">SHOP</Link>

                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                        )
                            : (<Link className='nav-link' to="/auth">SIGN IN</Link>)
                    }

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar