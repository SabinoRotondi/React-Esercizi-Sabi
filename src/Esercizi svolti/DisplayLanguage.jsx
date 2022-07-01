import React from "react";
import { LanguageContext } from "./LanguageContext";
let Strings = {
    EN: { SELECTED_LANGUAGE: 'English' },
    IT: { SELECTED_LANGUAGE: 'Italian' }
}
export const DisplayLanguage = () => {
    return (
        <div>
            <LanguageContext.Consumer>
                {language => {
                    return <div>
                        <h1>You've Selected: {Strings[language].SELECTED_LANGUAGE}</h1>
                    </div>
                }}
            </LanguageContext.Consumer>
        </div>
    )
}