import classes from './Login.module.css';
import loginImg  from '../images/login-img.20a90984.svg';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {

    const {loginWithRedirect} = useAuth0();
    return(
        <section className={classes.section}>
            <div className={classes.container}>
                <img src={loginImg} alt='github users'></img>
                <h1>Github user</h1>
                <button className='btn' onClick={() => loginWithRedirect()}>Login / Sign up</button>
            </div>
        </section>
    )
}

export default Login;