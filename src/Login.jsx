import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        remember:false
    }
    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;
        const checked = e.target.checked;
        this.setState({[name]:type==='checkbox'? checked:value})
    }
    handleResetBtn = () => {
        this.setState({ username: '', password: '', remember: false })
        // console.log(this.state);
    }
  render() {
    return (
        <div>
            <input type="text" name='username' value={this.state.username} onChange={this.handleInput} />
            <input type="password" name='password' value={this.state.password} onChange={this.handleInput}/>
            <input type="checkbox" name='remember' checked={this.state.remember} onChange={this.handleInput}/>
            <button disabled={!this.state.username && !this.state.password} onClick={() => this.props.func(this.state)}>Login</button>
            <button onClick={this.handleResetBtn}>Reset</button>
      </div>
    )
  }
}
