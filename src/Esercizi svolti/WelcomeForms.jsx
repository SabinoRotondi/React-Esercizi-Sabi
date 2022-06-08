import React, { Component } from 'react'
class WelcomeForms extends Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name}</p>
            </div>
        );
    }
}

export default WelcomeForms