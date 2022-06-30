import { useGithubUser3 } from "./SWR03";

const GithubUser3 = ({ username }) => {
    const { data, error, isLoading, onRefetch } = useGithubUser3(username);
    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>Error!</h2>}
            {data && (
                <div>
                    <h1>{data.login}</h1>
                    <h2>{data.url}</h2>
                    <button onClick={onRefetch}>Refetch</button>
                </div>
                
            )}
        </div>
    );
};

export default GithubUser3; 