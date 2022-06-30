import useSWR from "swr";

const swrFetch = (url) => fetch(url).then((response) => response.json());

export function useGithubUser3(username) {
    const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`, swrFetch);
    function handleRefetch() {
        mutate();
    };
    return { data, error, isLoading: !data && !error, onRefetch: handleRefetch };
}