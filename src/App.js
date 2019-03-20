import React, { Component } from 'react';
import Login from './pages/Login';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StudentDashboard from './pages/StudentDashboard';
import HomePage from './pages/HomePage';
import UniversityLogin from './pages/UniversityLogin';
import UniversityDashboard from './pages/UniversityDashboard';
import AddStudent from './pages/AddStudent';
import AddCertificate from './pages/AddCertificate';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>      
          <div>
            <Route path="/" component={Login} exact />
            <Route path="/login" component={UniversityLogin} exact /> 

            <Route path="/studentdashboard" component={StudentDashboard} exact /> 
            <Route path="/universitydashboard" component={UniversityDashboard} exact /> 
            
            <Route path="/addstudent" component={AddStudent} exact /> 
            <Route path="/addcertificate" component={AddCertificate} exact /> 


          </div> 
        </Router>
          
      </div>
    );
  }
}

export default App;
