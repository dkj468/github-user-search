import useGlobalContext from '../../context/Context';
import classes from './Charts.module.css';
import LanguageChart from './LanguageChart';
import MostPopular from './MostPopular';

const Charts = () => {
    const {repos} = useGlobalContext();

    let languages = repos.reduce((total, item) => {
        const {language} = item;
        if(!language) return total;
        if(!total[language]) {
            total[language] = {label: language, value: 1}
        } else {
            total[language] = {...total[language], value: total[language].value + 1}
        }    
        return total;
        
    }, {});

    languages = Object.values(languages).sort((a,b) => {
        return (b.value - a.value);
    }).slice(0, 5);

    // console.log(languages);

    let stars = repos.map(({name, stargazers_count}) => {
        return({label: name, value: stargazers_count})
    }).sort((a,b) => {
        return (b.value - a.value)
    }).splice(0, 5);

    // console.log(stars)
    return(
        <section className='section'>
            <div className={`${classes.wrapper} section-center`}>
                <LanguageChart data={languages}/>
                <MostPopular data={stars}/>
            </div>
        </section>
    )
}

export default Charts;