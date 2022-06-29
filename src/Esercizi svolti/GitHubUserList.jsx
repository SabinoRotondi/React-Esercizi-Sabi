import { Link, Outlet } from 'react-router-dom';
import { useState } from "react";

const GitHubUsersList = () => {
    const [user, setUser] = useState('');
    const [dB, setDB] = useState([]);
    const onChange = (e) => {
        setUser(e.target.value);
    };
    const addToDB = () => {
        setDB((state) => [...state, user]);
    };
    return (
        <>
            <input type="text" name="user" onChange={onChange} />
            <button onClick={addToDB}>Add User</button>
            {dB.map((user, i) => (
                <Link key={i} to={user}>
                    User: {user}
                </Link>
            ))}
            <Outlet />
        </>
    )
}
export default GitHubUsersList;