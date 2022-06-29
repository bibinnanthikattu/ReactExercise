import React, { Component, useContext } from 'react'
import { LanguageContext } from './LanguageContext'

export default function DisplayLanguage() {
    const language = useContext(LanguageContext)

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
                        <h1>Current Language is : {languages[language].CURRENT_LANGUAGE}</h1>
      </div>
    )
  }

