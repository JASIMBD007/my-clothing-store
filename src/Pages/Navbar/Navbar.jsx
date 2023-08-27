import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import crown from '../../assets/crown.svg';
import './Navbar.scss'

const Navbar = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <img src={crown} className="logo" alt="logo" />

                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to="/shop">SHOP</Link>
                    <Link className='nav-link' to="/auth">SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar