import { useState } from 'react';

const Login = () => {
    const [info, setInfo] = useState({
        name: '',
        password: '',
        remember: false,
    });

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;

        setInfo((info) => {
            return {
                ...info,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
    };

    const onLogin = (e) => {
        e.preventDefault()
        console.log(info);
    };

    return (
        <>
            {' '}
            <input
                type="text"
                name="name"
                value={info.name}
                onChange={onChange}
            ></input>
            <input
                type="password"
                name="password"
                value={info.password}
                onChange={onChange}
            ></input>
            <input
                type="checkbox"
                name="remember"
                value={info.remember}
                onChange={onChange}
            ></input>
            <button
                type="button"
                onClick={onLogin}
                disabled={!info.name || !info.password}
            >
                Login
            </button>
        </>
    );
};

export default Login;