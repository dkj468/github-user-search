import useGlobalContext from '../context/Context';
import {CgOrganisation} from 'react-icons/cg';
import {GoLocation} from 'react-icons/go';
import {BsLink} from 'react-icons/bs';
import classes from './User.module.css';

const User = () => {
    const {user, follower} = useGlobalContext();
    return(
        <section className='section'>
            <div className={`${classes.wrapper} section-center`}>
                <article className={classes.user}>
                    <header className={classes.header}>
                        <img src={user.avatar_url} alt={user.name} />
                        <div>
                            <h4>{user.name}</h4>
                            <p>{`@${user.login}`}</p>
                        </div>
                        <a href={user.html_url}>follow</a>
                    </header>
                    <p className='bio'>{user.bio}</p>
                    <div className={classes.links}>
                        <p>
                            <CgOrganisation /> {user.company}
                        </p>
                        <p>
                            <GoLocation /> {user.location}
                        </p>
                        <p>
                            <a href={user.blog}>
                                <BsLink /> {user.blog}
                            </a>
                        </p>
                    </div>
                </article>
                <article className={classes.follower}>
                    <div className={classes['follower-list']}>
                        {
                            follower.map(item => {
                                const {id, avatar_url, login, html_url } = item;
                                return(
                                    <article key={id}>
                                        <img src={avatar_url} alt={login} />
                                        <div>
                                            <h4>{login}</h4>
                                            <a href={html_url}>{html_url}</a>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </article>
            </div>
        </section>
    )
}

export default User;