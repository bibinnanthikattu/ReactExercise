import React, { Component } from 'react';
import Welcome from './Welcome'

export default class InteractiveWelcome extends Component {
    state = {
        name:''
    }
    handleInputValue = (e) => {
        const inputValue = e.target.value;
        // console.log(inputValue)
        this.setState({name:inputValue})
    }
  render() {
    return (
        <div>
            <input type="text" onChange={this.handleInputValue} />
            <Welcome name={this.state.name} />
    
      </div>
    )
  }
}
