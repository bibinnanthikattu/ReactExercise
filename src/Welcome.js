import React, { Component } from 'react'

export default class Welcome extends Component {
    constructor(props) {
        super(props)
        
    }
  render() {
    return (
        <div className='welcome'>
        <p>Welcome {this.props.name}</p>
      </div>
    )
  }
}
