import classes from './Info.module.css'
import {GoRepo, GoGist} from 'react-icons/go';
import {FiUsers, FiUserPlus} from 'react-icons/fi';
import useGlobalContext from "../context/Context";


const Info = (props) => {
    const {user} = useGlobalContext();

    return(
        <section className='section'>
          <section className={`${classes['section-inner']} section-center`}>
              <article className={classes.item}>
                <span className={classes.pink}>
                    <GoRepo className={classes.icon}/>
                </span>
                <div>
                    <h3>{user.public_repos}</h3>
                    <p>repos</p>
                </div>
              </article>
              <article className={classes.item}>
                <span className={classes.green}>
                    <FiUsers className={classes.icon}/>
                </span>
                <div>
                    <h3>{user.followers}</h3>
                    <p>followers</p>
                </div>
              </article>
              <article className={classes.item}>
                <span className={classes.purple}>
                    <FiUserPlus className={classes.icon}/>
                </span>
                <div>
                    <h3>{user.following}</h3>
                    <p>following</p>
                </div>
              </article>
              <article className={classes.item}>
                <span className={classes.yellow}>
                    <GoGist className={classes.icon}/>
                </span>
                <div>
                    <h3>{user.public_gists}</h3>
                    <p>Gits</p>
                </div>
              </article>
          </section>
        </section>
    )
}

export default Info;