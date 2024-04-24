import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    const { username, password } = this.state;
    // Example validation
    if (username === 'admin' && password === 'password') {
      // Redirect or perform other actions upon successful login
      console.log('Login successful');
    } else {
      this.setState({ errorMessage: 'Invalid username or password' });
    }
  };

  render() {
    const { username, password, errorMessage } = this.state;
    return (
      <div className="container">
        <h2>Login</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p className="mt-3">
          Don't have an account? <Link to="/signup">Register</Link>
        </p>
      </div>
    );
  }
}
