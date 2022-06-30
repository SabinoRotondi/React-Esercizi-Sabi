import { useState } from 'react'

export function useForm() {
    const [info, setInfo] = useState({
        name: '',
        password: '',
        remember: false,
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setInfo((info) => {
            return {
                ...info,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
    };

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(info);
    };
    return {
        name: info.name,
        password: info.password,
        remember: info.remember,
        onChange: handleChange,
        onLogin: handleLogin
    }
}