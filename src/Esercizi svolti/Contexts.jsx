import React, { Component } from 'react';
import { DisplayLanguage } from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';

class ContextOne extends Component {
    state = {
        language: 'English',
    };

    onLanguage = (e) => {
        this.setState({ language: e.target.value });
    };

    render() {
        return (
            <>
                <select value={this.state.language} onChange={this.onLanguage}>
                    <option value="English">English</option>
                    <option value="Italian">Italian</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
            </>
        );
    }
}

export default ContextOne;