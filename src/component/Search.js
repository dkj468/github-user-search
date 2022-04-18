import classes from './Search.module.css';
import {MdSearch} from 'react-icons/md';
import useGlobalContext from '../context/Context';
import { useState } from 'react';

const Search = () => {
    const [user, setUser] = useState('');
    const {remaining, error, searchUser} = useGlobalContext();
   
    const serachHandler = (e) => {
        e.preventDefault();
        searchUser(user);
    }

    const userChangeHandler = (e) => {
        const userName = e.target.value;
        setUser(userName);
    }

    return(
        <section className='section'>
            <div className={`${classes.wrapper} section-center`}>
                {error &&
                    <article className={classes.error}>
                        <p>{error.msg}</p>
                    </article>
                }
                <form onSubmit={serachHandler}>
                    <div className={classes['form-control']}>
                        
                        <input 
                            type='text' 
                            placeholder='enter github user' 
                            value={user}
                            onChange={userChangeHandler}    
                        />
                        <button type='submit'>Search</button>
                    </div>
                </form>
                <h3>Request : {remaining} / 60</h3>
            </div>
        </section>
    )
}

export default Search;