import { Link } from 'react-router-dom';
import classes from './Error.module.css';

const Error = () => {
    return(
        <section className={classes.section}>
            <div>
                <h1>404</h1>
                <h3>sorry, the page you tried cannot be found</h3>
                <Link to='/' className='btn'>Back HomeHome</Link>
            </div>
        </section>
    )
}

export default Error;