import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
 
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
	  
		  <header class="header-section">
			<div class="container-fluid center-nav">
				<div class="row">
					<div class="col-lg-12">
						<nav class="nav-menu mobile-menu">
							<ul>
								<li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
								<li><NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink></li>
								<li><NavLink activeClassName="active" to="/adduser">Add User</NavLink></li>
								<li><NavLink activeClassName="active" to="/login" onClick={handleLogout}>Logout</NavLink></li>								
							</ul>
						</nav>
						<div id="mobile-menu-wrap"></div>
					</div>
				</div>
			</div>
			</header>
	  
	  
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <PublicRoute path="/login" component={Login} />
              <PublicRoute path="/dashboard" component={Dashboard} />
              <PublicRoute path="/adduser" component={AddUser} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;