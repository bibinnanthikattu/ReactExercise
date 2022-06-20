import React, { Component } from 'react'

export default class Login extends Component {
    sate = {
        username: '',
        password: '',
        remember:false
    }
  render() {
    return (
        <div>
            <input type="text" name='username' />
            <input type="password" name='password' />
            <input type="checkbox" name='remember' />
      </div>
    )
  }
}
