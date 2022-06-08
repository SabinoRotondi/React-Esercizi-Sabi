import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: '',
        password: '',
        remember: false,
    }

    onChange = (e) => {
        const value = (e.target.type === 'checkbox' ? e.target.checked : e.target.value);
        const name = e.target.name;
        this.setState({ [name]: value })
    }

    onLogin = (e) => {
        e.preventDefault();
        console.log(this.state)

    }

    onReset = () => {
        this.setState(
            {
                username: '',
                password: '',
                remember: false,
            }
        )
    }

    render() {
        return (
            <form>
                <input name='username' type='text' value={this.state.username} placeholder='username' onChange={this.onChange} />
                <input name='password' type='password' value={this.state.password} placeholder='password' onChange={this.onChange} />
                <input name='remember' type='checkbox' checked={this.state.remember} onChange={this.onChange} />
                <button type='submit' onClick={this.onLogin} disabled={(this.state.password === '' || this.state.username === '' ? true : false)}>Login</button>
                <button onClick={this.onReset}>Reset</button>
            </form>
        )
    }
}
export default Login;