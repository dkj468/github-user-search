import Charts from "../component/Charts/Charts";
import ExampleChart from "../component/Charts/ExampleChart";
import Info from "../component/Info";
import Navbar from "../component/Navbar";
import Search from "../component/Search";
import User from "../component/User";
import useGlobalContext from "../context/Context";
import loadingImage from '../images/preloader.gif';

const Dashboard = () => {

    const {IsLoading} = useGlobalContext();
    // console.log(ctx);

    if(IsLoading){
        return (
            <main>
                <Navbar />
                <Search /> 
                <img src={loadingImage} alt='loader' className="loading-img " />
            </main>
        )
    }
    return(
        <main>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Charts />
        </main>
    )
}

export default Dashboard;