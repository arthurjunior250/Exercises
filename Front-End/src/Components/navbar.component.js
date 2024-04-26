import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: ''
    };
  }

  componentDidMount() {
    // Retrieve login state and username from localStorage
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      const userData = JSON.parse(user);
      this.setState({ isLoggedIn: true, username: userData.data.username });
    }
  }

  // Function to handle logging out
  handleLogout = () => {
    // Implement logout logic here (clear local storage, reset state, etc.)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({ isLoggedIn: false, username: '' });
  };

  render() {
    const { isLoggedIn, username } = this.state;

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Exercise Log</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {isLoggedIn ? (
              // If user is logged in, display username and user icon
              <>
              <Link to="/dashboard" className="nav-link">
                <li className="nav-item">
                <i className="fas fa-user-circle fa-lg text-light mr-3"></i>
                  <span className="navbar-text mr-3">{username}</span>
                </li>
                </Link>
              </>
            ) : (
              // If user is not logged in, display login button
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  {/* Changed to display username and icon */}
                  <button className="btn btn-outline-light">
                    <i className="fas fa-sign-in-alt mr-1"></i>
                    Login
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
