import React, { Component } from "react";
import { withAuth } from './../lib/Auth';
// import {
//   Label,
//   Input,
// } from '@rebass/forms'
// import { ThemeProvider } from '../components/ThemeProvider'


class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.login(username, password);
    // this.props.login method is coming from the AuthProvider
    // injected by the withAuth() HOC
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>Username:</label>
          <input 
          color='black'
          type="text" 
          name="username" 
          value={username} 
          onChange={this.handleChange} />

          <label>Password:</label>
          <input 
          type="password" 
          name="password" 
          value={password} 
          onChange={this.handleChange} />

          <input 
          type="submit" 
          value="Login" />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);