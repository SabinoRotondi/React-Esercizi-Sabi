import GithubUser from "./useEffect03";
import { useState } from "react";

const GithubUsersList = () => {
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
            <input name="user" onChange={onChange} />
            <button onClick={addToDB}>Add user</button>
            {dB.map((name, i) => (<GithubUser key={i} username={name} />))}
        </>
    )
}
export default GithubUsersList;