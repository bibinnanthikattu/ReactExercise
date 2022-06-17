import React, { Component } from 'react'

export default class 
extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0,
        }
        setInterval(() => {
            this.setState((state,props)=>({counter:state.counter +1}))
        },1000)
    }
  render() {
    return (
      <div>
            <p>Counter is : {this.state.counter}</p>
      </div>
    )
  }
}
