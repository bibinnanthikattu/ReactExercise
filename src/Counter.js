import React, { Component } from 'react'
import CounterDisplay from './CounterDisplay';

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
            <CounterDisplay count={this.state.counter} />
      </div>
    )
  }
}
