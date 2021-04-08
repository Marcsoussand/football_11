import '../CSS/Login.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';

//Login page, used to deal with a token username/password in order to connect to the site.

// async function loginUser(credentials) {
//     return fetch('http://localhost:8081/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//    }
   
     

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
     const [password, setPassword] = useState();
   
     const handleSubmit = async e => {
       e.preventDefault();
    //    const token = await loginUser({
        const token =({
         username,
         password
       });
       console.log(token);
       localStorage.setItem('token', JSON.stringify(token));
       setToken(token);
     }

     
    return (
        <>
        <div id='loginContainer'>
        <h2>Welcome, please enter your login</h2>
        <form id='loginForm' onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" className='inputLogin' onChange={e => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" className='inputLogin' onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
      {/* <NavLink to='/realTeams'><button type="submit" className='loginButton'>Submit</button></NavLink> */}
      <button type="submit" className='loginButton'>Submit</button>
      </div>
    </form>
    </div>
     {/* <div id='loginContainer'>
     <h2>To register for the first time</h2>
     <form id='registerForm'>
     <label>
     <p>First Name</p>
     <input type="text" className='inputLogin' />
   </label>
   <label>
     <p>Last Name</p>
     <input type="text" className='inputLogin' />
   </label>
   <label>
     <p>Email</p>
     <input type="email" className='inputLogin' />
   </label>
   <label>
     <p>Username</p>
     <input type="text" className='inputLogin' />
   </label>
   <label>
     <p>Password</p>
     <input type="password" className='inputLogin' />
   </label>
   <div>
     <button type="submit" className='loginButton'>Submit</button>
   </div>
 </form>
 </div> */}
 </>

    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };
