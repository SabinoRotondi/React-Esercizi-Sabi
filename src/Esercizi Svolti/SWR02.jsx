import useSWR from "swr";

const swrFetch = (url) => fetch(url).then((response) => response.json());

export function useGithubUser2(username) {
    const { data, error } = useSWR(username ? `https://api.github.com/users/${username}` : null, swrFetch);
    return { data, error, isLoading: !data && !error };
}