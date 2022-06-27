import './App.css';
import React from 'react';
import { LanguageContext } from './LanguageContext';
import DisplayLanguage from './DisplayLanguage';

export default class App extends React.Component {
  state = {
    language:'en'
  }
  handleLanguage = (e) => {
    this.setState({language:e.target.value})
  }
  render() {
    
    return (
      <>
        <select value={this.state.language} onChange={this.handleLanguage}>
          <option value='en'>ENGLISH</option>
          <option value='it'>ITALIAN</option>
          <option value='mal'>MALAYALAM</option> 
        </select>
        <LanguageContext.Provider value={this.state.language}>
            <DisplayLanguage/>
        </LanguageContext.Provider>
      </>
    );
  }
  }


