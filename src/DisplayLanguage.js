import React, { Component } from 'react'
import { LanguageContext } from './LanguageContext'

export default class DisplayLanguage extends Component {
    render() {


    return (
        <div>
            <LanguageContext.Consumer>
                {(language) => {
                    return (
                        <h3>This is the cosumer</h3>
                    )
                }}
            </LanguageContext.Consumer>
      </div>
    )
  }
}
