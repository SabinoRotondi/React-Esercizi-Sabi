import { useEffect, useState } from 'react';
 
export const useGithubUser = (username) => {
    const [userData, setUserData] = useState();
    useEffect(() => {
        const fetchUser = async (username) => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                const data = await response.json();
                setUserData(data);
            } catch (e) {
                throw new Error(e.message);
            }
        };
        fetchUser(username);
    }, [username]);
    return {
        onUserData : userData
    };
}