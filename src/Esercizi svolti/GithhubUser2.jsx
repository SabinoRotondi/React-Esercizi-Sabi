import React from "react";
import {useGithubUser2} from "./useGithubUser2";


export default function GithubUser2({ username }){
    const {onUser, onLoading, onError} = useGithubUser2(username)


    return(
        <>
            <div>
                {onLoading && <h1>onLoading...</h1>}
                {onError && <h1>onError... </h1>}
                <h1>Github User</h1>
                {onUser && <h2>{onUser.login}</h2>}
                {onUser && <h3>{onUser.url}</h3>}
            </div>
        </>
    )
}