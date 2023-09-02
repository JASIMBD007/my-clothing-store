import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import crown from '../../assets/crown.svg';
import './NavbarStyles.jsx'
import { UserContext } from '../../contexts/userContext';
import { signOutUser } from '../../Utility/Firebase/firebase.init';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropDown from '../../components/CartDropDown/CartDropDown';
import { CartContext } from '../../contexts/cartContext';
import { LogoContainer, LogoImage, NavLink, NavLinks, NavigationContainer } from './NavbarStyles.jsx';

const Navbar = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'> {/* Make sure the path is correct */}
                    <LogoImage src={crown} alt="logo" />
                </LogoContainer>

                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>

                    {currentUser ? (
                        <NavLink onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navbar;
