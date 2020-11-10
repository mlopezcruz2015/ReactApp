import React, { useState } from 'react';
import axios from 'axios';
 
function AddUser(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // handle click event of Register Button
  const handleRegisterUser = () => {
	  
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
    <div>
	  Add User Here<br /><br />
	  <div>
        New Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        New Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
	  <br />
      <input type="button" onClick={handleRegisterUser} value="Register User" />
	  
	  <br />
	  <br />
	<span>Just for Testing:</span>
	  <br />
	<span>Username entered: {username.value}</span>
	  <br />
	<span>Password entered: {password.value}</span>
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
 
export default AddUser;