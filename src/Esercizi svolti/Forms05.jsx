import React, { Component } from 'react'

export class UncontrolledLogin extends Component {

    onSubmit = (e) => {
        e.preventDefault()
        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        const remember = e.target.elements.remember.checked
        console.log({ username, password, remember })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="username" />
                    <input name="password" type="password" />
                    <input name="remember" type="checkbox" />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default UncontrolledLogin