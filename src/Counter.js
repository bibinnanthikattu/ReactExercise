import React, { Component } from 'react'
import CounterDisplay from './CounterDisplay';

export default class 
    extends Component {
        state = {
            counter:this.props.initialValue,
        }
  
    componentDidMount() {
        setInterval(() => {
            this.setState((state,props)=>({counter:state.counter +props.increment}))
        },this.props.timeout)
    }

  render() {
    return (
      <div>
            <CounterDisplay count={this.state.counter} />
      </div>
    )
  }
}
