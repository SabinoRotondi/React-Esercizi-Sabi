import React from "react";
import { useForm } from "./useForm";

export function Form() {
    const { name, password, remember, onChange, onLogin } = useForm()
    return (
        <div>
            <h1>My form</h1>
            <h2>Username: {name}</h2>
            <h2>Password: {password}</h2>
            <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
            ></input>
            <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
            ></input>
            <input
                type="checkbox"
                name="remember"
                value={remember}
                onChange={onChange}
            ></input>
            <button
                type="button"
                onClick={onLogin}
                disabled={!name || !password}
            >
                Login
            </button>
        </div>
    );
};