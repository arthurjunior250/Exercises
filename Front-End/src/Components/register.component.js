import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { username, email, password, confirmPassword } = this.state;

    // Check if passwords match
    if (password !== confirmPassword) {
      this.setState({ errorMessage: 'Passwords do not match' });
      return;
    }

    const user = {
      username: username,
      email: email,
      password: password
    };

    axios.post('http://localhost:5000/register/add', user)
      .then(res => {
        console.log(res.data);
        // Redirect or perform other actions upon successful registration
      })
      .catch(error => {
        this.setState({ errorMessage: error.response.data.message });
      });

    // Clear form fields
    this.setState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        {this.state.errorMessage && <div className="alert alert-danger">{this.state.errorMessage}</div>}
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group"> 
            <label>Email: </label>
            <input type="email"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group"> 
            <label>Password: </label>
            <input type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group"> 
            <label>Confirm Password: </label>
            <input type="password"
              required
              className="form-control"
              value={this.state.confirmPassword}
              onChange={this.onChangeConfirmPassword}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
