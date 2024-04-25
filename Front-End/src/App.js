// App.js
import React from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Login from './Components/login.components';
import Register from './Components/register.component'
import Dashboard from './Components/dashboard.component';
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
    <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
  );
};

export default App;
