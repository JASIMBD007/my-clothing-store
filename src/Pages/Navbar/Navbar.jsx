import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import crown from '../../assets/crown.svg';
import './Navbar.scss'
import { UserContext } from '../../contexts/userContext';
import { signOutUser } from '../../Utility/Firebase/firebase.init';
import CartIcon from '../../components/CartIcon/CartIcon';

const Navbar = () => {

    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <img src={crown} className="logo" alt="logo" />
                </Link>
                <div className='nav-links-container'>
                    <div className='nav-links-left'>
                        <Link className='nav-link' to="/shop">SHOP</Link>
                        {currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className='nav-link' to="/auth">SIGN IN</Link>
                        )}
                    </div>
                    <div className='nav-links-right'>
                        <CartIcon />
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar;
