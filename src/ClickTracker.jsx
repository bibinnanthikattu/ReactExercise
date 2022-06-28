import React, { Component } from 'react'

export default class ClickTracker extends Component {
    state = {
       clickedBtn:''
    }
    handleButtonClick = (e) => {
        const lastClick = e.target.name
        // console.log(lastClick)
        this.setState({clickedBtn:lastClick})
    }
  render() {
    return (
        <div>
            <button name='First Button' onClick={this.handleButtonClick}>First Button</button>
            <button  name='Second Button' onClick={this.handleButtonClick}>Second Button</button>
            <button name='Third Button' onClick={this.handleButtonClick}>Third Button</button>
            <h1>You have clicked on {this.state.clickedBtn}</h1>
      </div>
    )
  }
}
