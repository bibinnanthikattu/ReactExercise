import React, { Component } from 'react'

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
    
      </div>
    )
  }
}
