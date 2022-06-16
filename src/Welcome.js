import React, { Component } from 'react'
import Age from './Age'

export default class Welcome extends Component {
  constructor(props) {
    super(props)
  }
  render() {
        let ageFilter = this.props.age;
    return (
        <div>
            {/* <p>Welcome {this.props.name = "Doe"} !</p> */}
            {/* you can't add a value to the name prop. but you can add a default value to the props. It will take the default value if no props is passed from the parent  */}
            {/* <p>Your age is {this.props.age} .</p> */}
            {/* {ageFilter > 18 ? <Age age={ageFilter} />: null }  */}
            {/* {ageFilter ? <Age age={ageFilter} /> :null} */}
        {/* {ageFilter >18 && ageFilter <65 ? <Age age={ageFilter} /> :null} */}
        {/* {ageFilter >18 && ageFilter <65 && this.props.name === "Jhon" ? <Age age={ageFilter} /> :null} */}
        <Age age={ageFilter} />

      </div>
    )
  }
}
