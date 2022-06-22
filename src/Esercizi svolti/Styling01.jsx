import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name}!</p>
            </div>
        )
    }
}

export default Welcome