import React, { Component } from 'react';
import WelcomeForms from './WelcomeForms';

class InteractiveWelcome extends Component {
    state = {
        input: '',
    }

    onChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.onChange} />
                <WelcomeForms name={this.state.input} />
            </div>
        );
    }
}

export default InteractiveWelcome;