import React from 'react';
import { useState, useEffect, isLoggedin } from 'react';
import axios from 'axios';


const DashLogout = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      useEffect(() => {
        axios({
          method: "post",
          url: "http://localhost:8080/login",
          responseType: "json",
          data: {
            email,
            password
          }
        }).then((res) => setData(res.data));
      }, [email, password]);
           
/*
const login = (e) => {
	e.preventDefault();
	console.log(email, password);
	const userData = {
	email,
	password,
	};
	localStorage.setItem('token-info', JSON.stringify(userData));
	setIsLoggedin(true);
	setEmail('');
	setPassword('');
};

const logout = () => {
	localStorage.removeItem('token-info');
	setIsLoggedin(false);
};
*/
return (
	<>
	<div className='logout'>
		{!isLoggedin ? (
		<>
			<form action="">
			<input
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				placeholder="Email"
			/>
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				placeholder="Password"
			/>
			/*<button type="submit" onClick={login}>
				Login
			</button>
			</form>
		</>
		) : (
		<>
		
			<button onClickCapture={logout}>Logout</button>
		</>
		)}
	</div>
	</>
);
}

export default DashLogout;