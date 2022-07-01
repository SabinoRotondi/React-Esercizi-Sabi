import React from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { useState } from "react";

function Context() {
    const [language, setLanguage] = useState('EN');
    const handleLanguage = (e) => { setLanguage(e.target.value) };
    return (
        <div>
            <select value={language} onChange={handleLanguage}>
                <option value='EN'>EN</option>
                <option value='IT'>IT</option>
            </select>
            <LanguageContext.Provider value={language}>
                <DisplayLanguage />
            </LanguageContext.Provider>
        </div>
    )
}

export default Context