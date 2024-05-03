// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.css';

// // Higher-order component to check authentication
// const withAuthCheck = (WrappedComponent) => {
//   return class extends Component {
//     render() {
//       // Check if token exists in local storage
//       const token = localStorage.getItem('token');

//       if (token) {
//         // If token exists, render the wrapped component
//         return <WrappedComponent {...this.props} />;
//       } else {
//         // If token doesn't exist, redirect to login page
//         return <Redirect to="/login" />;
//       }
//     }
//   };
// };

// class Dashboard extends Component {
//   handleLogout = () => {
//     // Clear local storage
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     // Redirect to login page
//     window.location.href = '/login'; // Use window.location.href to force a full page reload
//   };
//   render() {
//     return (
//       <div className="container-fluid">
//       <div className="row">
//         {/* Sidebar */}
//         <nav className="col-md-2 d-none d-md-block bg-dark sidebar" style={{ height: "80vh" }}>
//           <div className="sidebar-sticky">
//             <ul className="nav">
//               <li className="nav-item">
//                 <Link className="nav-link btn btn-dark active" to="/dashboard">
//                   <i className="fas fa-home"></i> <span className="text-white">Dashboard</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="mt-auto"> {/* Add mt-auto to push items to the bottom */}
//             <ul className="nav">
//               <li className="nav-item">
//                 <Link className="nav-link btn btn-dark" to="/users">
//                   <i className="fas fa-users"></i> <span className="text-white">Users</span>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link btn btn-dark" to="/exercises">
//                   <i className="fas fa-chart-bar"></i> <span className="text-white">Exercises</span>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <button className="nav-link btn btn-dark" onClick={this.handleLogout}>
//                   <i className="fas fa-sign-out-alt"></i> <span className="text-white">Logout</span>
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         {/* Main content */}
//         <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
//           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//             <h1 className="h2">Dashboard</h1>
//           </div>
//           <div className="row">
//             {/* Users Card */}
//             <div className="col-lg-6">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Number of Users</h5>
//                   <p className="card-text">100</p> {/* Replace with actual number of users */}
//                 </div>
//               </div>
//             </div>
//             {/* Exercises Card */}
//             <div className="col-lg-6">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Number of Exercises</h5>
//                   <p className="card-text">200</p> {/* Replace with actual number of exercises */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//     );
//   }
// }

// // Wrap Dashboard component with authentication check HOC
// export default withAuthCheck(Dashboard);

// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.css';

// // Higher-order component to check authentication
// const withAuthCheck = (WrappedComponent) => {
//   return class extends Component {
//     render() {
//       // Check if token exists in local storage
//       const token = localStorage.getItem('token');

//       if (token) {
//         // If token exists, render the wrapped component
//         return <WrappedComponent {...this.props} />;
//       } else {
//         // If token doesn't exist, redirect to login page
//         return <Redirect to="/login" />;
//       }
//     }
//   };
// };

// const Users = () => <h2>Users</h2>;
// const Exercises = () => <h2>Exercises</h2>;

// class Dashboard extends Component {
//   handleLogout = () => {
//     // Clear local storage
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     // Redirect to login page
//     window.location.href = '/login'; // Use window.location.href to force a full page reload
//   };
//   render() {
//     return (
//       <div className="container-fluid">
//         <div className="row">
//           {/* Sidebar */}
//           <nav className="col-md-2 d-none d-md-block bg-dark sidebar" style={{ height: "80vh" }}>
//             <div className="sidebar-sticky">
//               <ul className="nav mt-2">
//                 <li className="nav-item">
//                   <Link className="nav-link btn btn-dark" to="/dashboard">
//                     <i className="fas fa-home"></i> <span className="text-white">Dashboard</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link btn btn-dark" to="/users">
//                     <i className="fas fa-users"></i> <span className="text-white">Users</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link btn btn-dark" to="/exercises">
//                     <i className="fas fa-chart-bar"></i> <span className="text-white">Exercises</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <button className="nav-link btn btn-dark" onClick={this.handleLogout}>
//                     <i className="fas fa-sign-out-alt"></i> <span className="text-white">Logout</span>
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           {/* Main content */}
//           <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
//             <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//               <h1 className="h2">Dashboard</h1>
//             </div>
//             <Route path="/users" component={Users} />
//             <Route path="/exercises" component={Exercises} />
//           </main>
//         </div>
//       </div>
//     );
//   }
// }

// // Wrap Dashboard component with authentication check HOC
// const AuthenticatedDashboard = withAuthCheck(Dashboard);

// // App component with BrowserRouter
// const App = () => (
//   <Router>
//     <Route path="/" component={AuthenticatedDashboard} />
//   </Router>
// );

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.css';
// import Users from './users.component';
// // import Exercises from './Exercises';

// // Higher-order component to check authentication
// const withAuthCheck = (WrappedComponent) => {
//   return class extends React.Component {
//     render() {
//       // Check if token exists in local storage
//       const token = localStorage.getItem('token');

//       if (token) {
//         // If token exists, render the wrapped component
//         return <WrappedComponent {...this.props} />;
//       } else {
//         // If token doesn't exist, redirect to login page
//         return <Redirect to="/login" />;
//       }
//     }
//   };
// };

// class Dashboard extends React.Component {
//   handleLogout = () => {
//     // Clear local storage
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     // Redirect to login page
//     window.location.href = '/login'; // Use window.location.href to force a full page reload
//   };
//   render() {
//     return (
//       <div className="container-fluid">
//         <div className="row">
//           {/* Sidebar */}
//           <nav className="col-md-2 d-none d-md-block bg-dark sidebar" style={{ height: "80vh" }}>
//             <div className="sidebar-sticky">
//               <ul className="nav mt-2">
//                 <li className="nav-item">
//                   <Link className="nav-link btn btn-dark" to="/dashboard">
//                     <i className="fas fa-home"></i> <span className="text-white">Dashboard</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link btn btn-dark" to="/users">
//                     <i className="fas fa-users"></i> <span className="text-white">Users</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link btn btn-dark" to="/exercises">
//                     <i className="fas fa-chart-bar"></i> <span className="text-white">Exercises</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <button className="nav-link btn btn-dark" onClick={this.handleLogout}>
//                     <i className="fas fa-sign-out-alt"></i> <span className="text-white">Logout</span>
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           {/* Main content */}
//           <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
//             <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//               <h1 className="h2">Dashboard</h1>
//             </div>
//             <Route path="/users" component={Users} />
//             {/* <Route path="/exercises" component={Exercises} /> */}
//           </main>
//         </div>
//       </div>
//     );
//   }
// }

// // Wrap Dashboard component with authentication check HOC
// const AuthenticatedDashboard = withAuthCheck(Dashboard);

// // App component with BrowserRouter
// const App = () => (
//   <Router>
//     <Route path="/" component={AuthenticatedDashboard} />
//   </Router>
// );

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.css';
// import Users from './users.component';
// import Dash from './dash.component';

// // Higher-order component to check authentication
// const withAuthCheck = (WrappedComponent) => {
//   return class extends React.Component {
//     render() {
//       // Check if token exists in local storage
//       const token = localStorage.getItem('token');

//       if (token) {
//         // If token exists, render the wrapped component
//         return <WrappedComponent {...this.props} />;
//       } else {
//         // If token doesn't exist, redirect to login page
//         return <Redirect to="/login" />;
//       }
//     }
//   };
// };

// class Dashboard extends React.Component {
//   handleLogout = () => {
//     // Clear local storage
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     // Redirect to login page
//     window.location.href = '/login'; // Use window.location.href to force a full page reload
//   };

//   render() {
//     // Get user role from local storage
//     const userRole = JSON.parse(localStorage.getItem('user')).data.role;
//     return (
//       <div className="container-fluid">
//         <div className="row">
//           {/* Sidebar */}
//           <nav className="col-md-2 d-none d-md-block bg-dark sidebar" style={{ height: "80vh" }}>
//             <div className="sidebar-sticky">
//               <ul className="nav mt-2">
//                 <li className="nav-item">
//                   <Link className="nav-link btn btn-dark" to="/dashboard">
//                     <i className="fas fa-home"></i> <span className="text-white">Dashboard</span>
//                   </Link>
//                 </li>
//                 {/* Check if user is admin before rendering the link */}
//                 {userRole === 'admin' && (
//                   <li className="nav-item">
//                     <Link className="nav-link btn btn-dark" to="/users">
//                       <i className="fas fa-users"></i> <span className="text-white">Users</span>
//                     </Link>
//                   </li>
//                 )}
//                 <li className="nav-item">
//                   <Link className="nav-link btn btn-dark" to="/exercises">
//                     <i className="fas fa-chart-bar"></i> <span className="text-white">Exercises</span>
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <button className="nav-link btn btn-dark" onClick={this.handleLogout}>
//                     <i className="fas fa-sign-out-alt"></i> <span className="text-white">Logout</span>
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           {/* Main content */}
//           <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
//             <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//               <h1 className="h2">Dashboard</h1>
//             </div>
//             <Route path="/dashboard" component={Dash} />
//             <Route path="/users" component={Users} />
//             {/* <Route path="/exercises" component={Exercises} /> */}
//           </main>
//         </div>
//       </div>
//     );
//   }
// }

// // Wrap Dashboard component with authentication check HOC
// const AuthenticatedDashboard = withAuthCheck(Dashboard);

// // App component with BrowserRouter
// const App = () => (
//   <Router>
//     <AuthenticatedDashboard />
//   </Router>
// );


// export default App;


import React, { useState } from 'react';
import Users from './users.component';
import Dash from './dash.component';
import { Redirect, Link } from 'react-router-dom';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');
  
  // Get user role from local storage
  const user = JSON.parse(localStorage.getItem('user'));
  const userRole = user ? user.data.role : null;

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Redirect to login page
    window.location.href = '/login'; // Use window.location.href to force a full page reload
  };

  // Check if token exists in local storage
  const token = localStorage.getItem('token');

  if (!token) {
    // If token doesn't exist, redirect to login page
    return <Redirect to="/login" />;
  }

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-2 d-none d-md-block bg-dark sidebar" style={{ height: "80vh" }}>
          <div className="sidebar-sticky">
            <ul className="nav mt-2">
              <li className={selectedMenu === 'Dashboard' ? 'active' : ''} onClick={() => handleMenuClick('Dashboard')}>
                <Link className="nav-link btn btn-dark" to="/dashboard">
                  <i className="fas fa-home"></i> <span className="text-white">Dashboard</span>
                </Link>
              </li>
              {/* Check if user is admin before rendering the link */}
              {userRole === 'admin' && (
                <li className={selectedMenu === 'Users' ? 'active' : ''} onClick={() => handleMenuClick('Users')}>
                  <Link className="nav-link btn btn-dark" to="/dashboard">
                    <i className="fas fa-users"></i> <span className="text-white">Users</span>
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <button className="nav-link btn btn-dark" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i> <span className="text-white">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {/* Main content */}
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>
          {selectedMenu === 'Dashboard' && <Dash />}
          {selectedMenu === 'Users' && <Users />}
        </main>
      </div>
    </div>
  );
};



<Dash />;
<Users/>;

export default Dashboard;

