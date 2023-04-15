import { useState } from 'react';

const Signin = (props) => {

const [login, setLogin] = useState("");
const [pseudo, setPseudo] = useState("");
const [pass1, setPass1] = useState("");
const [pass2, setPass2] = useState("");

const getLogin = (evt) => {setLogin(evt.target.value)};
const getPass1 = (evt) => {setPass1(evt.target.value)};
const getPass2 = (evt) => {setPass2(evt.target.value)};
const getPseudo = (evt) => {setPseudo(evt.target.value)};


const submissionHandler = (evt) => {
	if (pass1 === pass2)
		{
			const user = {
				login: login,
				pseudo: pseudo,
				password: pass1,
				file: "default.jpg",
				bio: "J'adore Tertwee"
			}
			const storedUsers = JSON.parse(localStorage.getItem('data'));
			if(storedUsers != undefined)
			{
				const users = Object.values(storedUsers);
				users.push(user);
				localStorage.setItem('data', JSON.stringify(users));
			}
			else
				localStorage.setItem('data', JSON.stringify([user]));
		}
}


 return (
	<div className='signin_form'>
		<div className='sig_form_form'>
			<h1>Welcome to Tertwee</h1><br />
			<label htmlFor="signin_login">Login</label>
			<input id="signin_login" onChange={getLogin} className="input-form"/><br />
			<label htmlFor="signin_login">Pseudo</label>
			<input id="signin_login" onChange={getPseudo} className="input-form"/><br />
			<label htmlFor="signin_mdp1">Password</label><input type="password" id="signin_mdp1" onChange={getPass1} className="input-form"/><br />
			<label htmlFor="signin_mdp2">Confirm password</label><input type="password" id="signin_mdp2" onChange={getPass2} className="input-form"/><br />
			<button onClick={submissionHandler} className="login_bt">Sign In</button><br />
			<div>
				<label>Already an account ? </label><button onClick={props.form} className="signin_bt">Login</button>
			</div>
		</div>
	</div>
);
}

export default Signin;