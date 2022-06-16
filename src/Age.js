import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    const adult = <p> Your age is {this.props.age} . </p>;
    const young = <p>You're so young! </p>;
    return (
      <div>
        {this.props.age > 18 ?  adult  :  young }
      </div>
    )
  }
}
