import React, { Component } from 'react'
import { LanguageContext } from './LanguageContext'

export default class DisplayLanguage extends Component {
    render() {
        const languages = {
            en: {
        CURRENT_LANGUAGE: "ENGLISH"
            },
            it: {
        CURRENT_LANGUAGE: "ITALIAN"
            },
            mal: {
                CURRENT_LANGUAGE: "MALAYALAM"
            }
}

    return (
        <div>
            <LanguageContext.Consumer>
                {(language) => {
                    return (
                        <h1>Current Language is : {languages[language].CURRENT_LANGUAGE}</h1>
                    )
                }}
            </LanguageContext.Consumer>
      </div>
    )
  }
}
