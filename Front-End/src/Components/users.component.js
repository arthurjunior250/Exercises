// import React, { Component } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// class UsersList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       loading: true,
//       error: null
//     };
//   }

//   componentDidMount() {
//     axios.get('http://localhost:5000/auth')
//       .then(response => {
//         if (response.data && Array.isArray(response.data.data)) {
//           this.setState({
//             users: response.data.data,
//             loading: false,
//             error: null
//           });
//         } else {
//           this.setState({
//             loading: false,
//             error: 'Invalid data format: Response data does not contain users array.'
//           });
//         }
//       })
//       .catch(error => {
//         this.setState({
//           loading: false,
//           error: 'Failed to fetch users.'
//         });
//         toast.error('Failed to fetch users.');
//       });
//   }

//   handleEdit = (id) => {
//     // Redirect or handle editing logic here
//     console.log("Editing user with id:", id);
//   };

// //   handleDelete = (id) => {
// //     // Make DELETE request to the API
// //     axios.delete(`http://localhost:5000/auth/${id}`)
// //       .then(response => {
// //         // Handle successful deletion
// //         console.log("User deleted successfully.");
// //         toast.success('User deleted successfully.');
// //         // Refresh user list or update state if needed
// //       })
// //       .catch(error => {
// //         // Handle error
// //         console.error("Error deleting user:", error);
// //         toast.error('Error deleting user.');
// //       });
// //   };
// handleDelete = (id) => {
//     // Make DELETE request to the API
//     axios.delete(`http://localhost:5000/auth/${id}`)
//       .then(response => {
//         // Handle successful deletion
//         console.log("User deleted successfully.");
//         toast.success('User deleted successfully.');
//         // Fetch users again to update the list
//         axios.get('http://localhost:5000/auth')
//           .then(response => {
//             if (response.data && Array.isArray(response.data.data)) {
//               this.setState({
//                 users: response.data.data,
//                 loading: false,
//                 error: null
//               });
//             } else {
//               this.setState({
//                 loading: false,
//                 error: 'Invalid data format: Response data does not contain users array.'
//               });
//             }
//           })
//           .catch(error => {
//             this.setState({
//               loading: false,
//               error: 'Failed to fetch users.'
//             });
//             toast.error('Failed to fetch users.');
//           });
//       })
//       .catch(error => {
//         // Handle error
//         console.error("Error deleting user:", error);
//         toast.error('Error deleting user.');
//       });
//   };
  
  
//   render() {
//     const { users, loading, error } = this.state;

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     if (error) {
//       return <div>Error: {error}</div>;
//     }

//     return (
//       <div>
//         <h3>Users List</h3>
//         <ToastContainer />
//         <table className="table">
//           <thead className="thead-light">
//             <tr>
//               <th>No</th>
//               <th>ID</th>
//               <th>Username</th>
//               <th>Role</th>
//               <th>Email</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <td>{index + 1}</td>
//                 <td>{user._id}</td>
//                 <td>{user.username}</td>
//                 <td>{user.role}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   <button onClick={() => this.handleEdit(user._id)} className="btn btn-primary mr-2">Edit</button>
//                   <button onClick={() => this.handleDelete(user._id)} className="btn btn-danger">Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default UsersList;
import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    axios.get('http://localhost:5000/auth')
      .then(response => {
        if (response.data && Array.isArray(response.data.data)) {
          this.setState({
            users: response.data.data,
            loading: false,
            error: null
          });
        } else {
          this.setState({
            loading: false,
            error: 'Invalid data format: Response data does not contain users array.'
          });
        }
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: 'Failed to fetch users.'
        });
        toast.error('Failed to fetch users.');
      });
  };

  handleEditRole = (id, newRole) => {
    // Make PUT request to update the user's role
    axios.put(`http://localhost:5000/auth/${id}`, { role: newRole })
      .then(response => {
        // Handle successful role update
        console.log("Role updated successfully.");
        toast.success('Role updated successfully.');
        // Fetch users again to update the list
        this.fetchUsers();
      })
      .catch(error => {
        // Handle error
        console.error("Error updating role:", error);
        toast.error('Error updating role.');
      });
  };

  render() {
    const { users, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h3>Users List</h3>
        <ToastContainer />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>
                  {/* Render an editable field for role */}
                  <select
                    value={user.role}
                    onChange={(e) => this.handleEditRole(user._id, e.target.value)}
                  >
                    <option value="standard-user">Standard User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => this.handleEdit(user._id)} className="btn btn-primary mr-2">Edit</button>
                  <button onClick={() => this.handleDelete(user._id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersList;
