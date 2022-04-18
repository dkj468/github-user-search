import classes from './AuthWrapper.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import loaderImg from '../images/preloader.gif';


const AuthWrapper = ({children}) => {
    const {isLoading, error} = useAuth0();

    if(isLoading){
        return (
            <section className={classes['section-wrapper']}>
                <img src={loaderImg} alt='loading' />
            </section>
        )
    }

    if(error){
        <section className={classes['section-wrapper']}>
            <h1>{error.message}</h1>
        </section>
    }
    return(
        <>{children}</>
    )
}

export default AuthWrapper;