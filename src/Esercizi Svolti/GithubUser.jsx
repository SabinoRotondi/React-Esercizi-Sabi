import { useGithubUser } from "./SWR01";

const GithubUser = ({ username }) => {
    const { data, error, isLoading } = useGithubUser(username);
    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>Error!</h2>}
            {data && (
                <div>
                    <h1>{data.login}</h1>
                    <h2>{data.url}</h2>
                </div>
            )}
        </div>
    );
};

export default GithubUser; 