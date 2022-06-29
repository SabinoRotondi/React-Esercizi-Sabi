import { useEffect, useState } from 'react';

const GithubUser = ({ username }) => {
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
    return (
        userData && (
            <div>
                <h1>{userData.login}</h1>
                <h2>{userData.url}</h2>
            </div>
        )
    );
};
export default GithubUser;