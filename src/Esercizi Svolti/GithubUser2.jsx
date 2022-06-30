import { useGithubUser2 } from "./SWR02";

const GithubUser2 = ({ username }) => {
    const { data, error, isLoading } = useGithubUser2(username);
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

export default GithubUser2; 