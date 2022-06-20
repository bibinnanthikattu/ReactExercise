import React, { Component } from 'react'

export default class ClickCounter extends Component {
    state = {
        counter:0
    }
    incrimentByClick =()=>(this.setState({counter:this.state.counter+1}))
  render() {
    return (
        <div>
            <button onClick={this.incrimentByClick}>Click Me</button>
            <p>You have pressed the button { this.state.counter} times.</p>
      </div>
    )
  }
}
