import React, { Component } from 'react'

export default class Welcome extends Component {
    constructor(props) {
        super(props)
        
    }
  render() {
    return (
        <div>
            {/* <p>Welcome {this.props.name = "Doe"} !</p> */}
            {/* you can't add a value to the name prop. but you can add a default value to the props. It will take the default value if no props is passed from the parent  */}
            <p>Your age is {this.props.age} .</p>
      </div>
    )
  }
}
