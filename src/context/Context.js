import React, { useEffect, useState }  from 'react';
import mockUser from './data/mockUser';
import mockRepos from './data/mockRepos';
import mockFollower from './data/mockFollowers';
import { useContext } from 'react';
import axios from 'axios';

const GithubContext = React.createContext();

export const GithubContextProvider = ({children}) => {

    const [user, setUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [follower, setFollowers] = useState(mockFollower);
    const [remaining, setRemaining] = useState(0);
    const [error, setError] = useState(null);
    const [IsLoading, setIsLoading] = useState(false);

    const fetchRateLimitData = async () => {
        setError(null);
        const data = await axios.get('https://api.github.com/rate_limit');
        let remain = data.data.rate.remaining;
        setRemaining(remain);
        if(remain === 0) {
            setError({msg:'Sorry, You have exceeded your rate limit!'})
        }
    }

    const searchUser = async (userName) => {
        setIsLoading(true);
        setError(null);
        try{
            let response = await axios(`https://api.github.com/users/${userName}`);
            setUser(response.data);
            const {repos_url, followers_url} = response.data;

            // get repos
            response = await axios.get(repos_url)
            setRepos(response.data);

            // get followers
            response = await axios.get(followers_url)
            setFollowers(response.data);
        } catch(err) {
            setError({msg:`No user found with name ${userName}`});
        }
        fetchRateLimitData();
        setIsLoading(false);
        
    }

    useEffect(() => {
        fetchRateLimitData();
    }, [])

    return(
        <GithubContext.Provider value={
            {user, repos, follower, remaining, error, searchUser, IsLoading}}>{children}</GithubContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GithubContext);
}

export default useGlobalContext;