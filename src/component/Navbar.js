import { useAuth0 } from '@auth0/auth0-react';
import classes from './Navbar.module.css';

const Navbar = () => {
    const {isAuthenticated,loginWithRedirect, logout, user, isLoading} = useAuth0();
    console.log({isAuthenticated, user, isLoading})

    const isUser = isAuthenticated && user;
    return(
        <nav className={classes.wrapper}>
            {isUser && user.picture &&
              <img src={user.picture} alt={user.name} />}
            {isUser && user.name && <h4>Welcome, {user.name}</h4>}
            
            {!isUser && <button onClick={() => loginWithRedirect()}>Login</button>}
            {isUser && <button onClick={() => logout({returnTo:window.location.origin})}>Logout</button>}
        </nav>
    )
}

export default Navbar;