import useSWR from "swr";

const swrFetch = (url) => fetch(url).then((response) => response.json());

export function useGithubUser(username) {
    const { data, error } = useSWR(`https://api.github.com/users/${username}`, swrFetch);
    return { data, error, isLoading: !data && !error };
}