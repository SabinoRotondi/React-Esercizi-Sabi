import React, { Component } from 'react'

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

    componentDidUpdate() {
        console.log(this.state)
    }


    render() {
        return (
            <form>
                <input name="username" value={this.state.username} onChange={this.onChange} />
                <input name="password" type="password" value={this.state.password} onChange={this.onChange} />
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.onChange} />
            </form>
        )
    }
}

export default Login;