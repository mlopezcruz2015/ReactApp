import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
 
function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/dashboard');
	
//	setError(null);
//    setLoading(true);
//    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
//      setLoading(false);
//      setUserSession(response.data.token, response.data.user);
//      props.history.push('/dashboard');
//    }).catch(error => {
//      setLoading(false);
//      if (error.response.status === 401) setError(error.response.data.message);
//      else setError("Something went wrong. Please try again later.");
//    });
  }
 
  return (
  
		<div class="contact-form">
		<div class="container-fluid">
		<div class="row">
		<div class="col-lg-4">                       
		<h3>Login Form</h3>
		<input class="form-control" type="text" {...username} autoComplete="new-password" placeholder="Username"/><br /> <br />      
        <input class="form-control" type="password" {...password} autoComplete="new-password" placeholder="Password"/><br />     	
		{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />	  
		<input class="btn btn-primary" type="button" class="site-btn" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
	</div>
	</div>
	</div>
	
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;