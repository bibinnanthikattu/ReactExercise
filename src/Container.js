import React, { Component } from 'react'

export default class Container extends Component {
    render() {
        const styles = {
            backgroundColor: "white",
            border: '1px solid red',
      }
    return (
        <div style={styles}>
            {this.props.title}
            {this.props.children}
      </div>
    )
  }
}
