// App.js
import React from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./Components/navbar.component";
import ExercisesList from "./Components/exercises-list.component";
import EditExercise from "./Components/edit-exercise.component";
import CreateExercise from "./Components/create-exercise.component";
import CreateUser from "./Components/create-user.component";
import Login from './Components/login.components';
import Register from './Components/register.component'
import Dashboard from './Components/dashboard.component';
import Footer from './Components/footer.components';
import UsersList from './Components/users.component';
import PrivateRoute from './Components/PrivateRoute';
const App = () => {
  return (
    
    <Router>
    <div className="container">
    <Navbar />
    <br/>
    <Route path="/" exact component={ExercisesList} />
    <Route path="/edit/:id" component={EditExercise} />
    <Route path="/create" component={CreateExercise} />
    <Route path="/user" component={CreateUser} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Register} />
    <Route element={<PrivateRoute />}>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/users" component={UsersList} /> 
    </Route>
    <Footer/>
    </div>
  </Router>
  );
};

export default App;
