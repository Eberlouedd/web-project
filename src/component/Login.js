import { useState } from 'react';
import Cookies from 'js-cookie';

const Login = (props) => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const getLogin = (evt) => {setLogin(evt.target.value)}
	const getPassword = (evt) => {setPassword(evt.target.value)}
	

	const handleLogin = (event) => {
		event.preventDefault();
		const storedUsers = localStorage.getItem('data');
		const users = JSON.parse(storedUsers);
		var match = {};
		if (users){
			match = users.find(user => user.login === login);
		}
		if(match && match.password === password){
			props.login(match.login);
		}else
			console.log('Erreur');
	}

	return (
		<div className="form-around">
			
			<form method="" action="" className='form-log'>
			<h1>Welcome to Tertwee</h1>
				<div className="form_form">
					<label htmlFor="login">Login</label><input id="login" onChange={getLogin} className="log"/><br />
					<label htmlFor="mdp">Mot de passe</label><input type="password" id="mdp" onChange={getPassword} className="pass"/><br />
					<button type="submit" onClick={handleLogin} className="login_bt">Log In</button><br />
					<div>

					<label>Don't have account ? </label><button className="signin_bt" onClick={props.form}>Sign in</button>
					</div>
				</div>
			</form>
		</div>
	);
}

 export default Login;