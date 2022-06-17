import React, { Component } from 'react'

export default class 
extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:props.initialValue,
        }
        setInterval(() => {
            this.setState((state,props)=>({counter:state.counter +props.increment}))
        },props.timeout)
    }
  render() {
    return (
      <div>
            <h1>Counter is : {this.state.counter}</h1>
      </div>
    )
  }
}
