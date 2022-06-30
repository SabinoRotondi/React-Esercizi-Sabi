import { useGithubUser } from "./useGithubUser";

const GithubUser = ({ username }) => {
    const { onUserData } = useGithubUser(username);
    return (
        <div>
            {onUserData && (
                <div>
                    <h1>{onUserData.login}</h1>
                    <h2>{onUserData.url}</h2>
                </div>
            )}
        </div>
    );
};
export default GithubUser; 