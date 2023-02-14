import React from 'react';


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
           

/*const login = (e) => {
	e.preventDefault();
	console.log(name, email, password);
	const userData = {
	name,
	email,
	password,
	};
	localStorage.setItem('token-info', JSON.stringify(userData));
	setIsLoggedin(true);
	setName('');
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
			<button type="submit" onClick={login}>
				Login
			</button>
			</form>
		</>
		) : (
		<>
			<h1>User is logged in</h1>
			<button onClickCapture={logout}>Logout</button>
		</>
		)}
	</div>
	</>
);
}

export default DashLogout;