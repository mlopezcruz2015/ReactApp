import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
 
import Login from './Login';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import firebase from './firebase';
 
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

 
function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
//  useEffect(() => {
//    const token = getToken();
//    if (!token) {
//      return;
//    }
 
//    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
//      setUserSession(response.data.token, response.data.user);
//      setAuthLoading(false);
//    }).catch(error => {
//      removeUserSession();
//      setAuthLoading(false);
//    });
//  }, []);
 
//  if (authLoading && getToken()) {
//    return <div className="content">Checking Authentication...</div>
//  }


   // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();


		firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.
	});
  }
  
  return (
    <div className="App">
      <BrowserRouter>
	  
	  
	  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="container-fluid nav-item-new mr-auto center-nav">
      <Nav.Link><NavLink activeClassName="active" to="/login" style={ {color: 'green'}} >Login</NavLink></Nav.Link>
      <Nav.Link><NavLink activeClassName="active" to="/dashboard"style={ {color: 'green'}} >Dashboard</NavLink></Nav.Link>
      <Nav.Link><NavLink activeClassName="active" to="/adduser"style={ {color: 'green'}} >Add User</NavLink></Nav.Link>
      <Nav.Link><NavLink activeClassName="active" to="/login" style={ {color: 'green'}} onClick={handleLogout}>Logout</NavLink></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
	  
	  
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <PublicRoute path="/login" component={Login} />
              <PublicRoute path="/dashboard" component={Dashboard} />
              <PublicRoute path="/adduser" component={AddUser} />
			  <Route path="*" component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;