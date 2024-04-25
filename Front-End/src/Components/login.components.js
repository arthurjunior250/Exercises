import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    try {
      const response = await fetch("http://localhost:5000/register/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username, // Assuming your backend expects "email" instead of "username"
          password: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data));
        console.log(data.token);
        // Redirect to dashboard
        this.props.history.push("/dashboard"); // Assuming you have defined the route for dashboard
        window.location.reload();
      } else {
        // Handle login failure
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="container">
        <h2>Login</h2>
        <ToastContainer />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input
              type="email"
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
