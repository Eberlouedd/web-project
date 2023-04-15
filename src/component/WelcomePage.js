import React, { useState } from "react";
import Login from "./Login";
import Signin from "./Signin";
import './../style/welcome.scss'
import './../style/signin.scss'

const WelcomePage = (props) => {

	const [form, setForm] = useState(1);

	const toSignin = () => {
		setForm(0);
	}

	const toLogin = () => {
		setForm(1);
	}


	return(
		<div>
			{form ?  
				(<Login login={props.login} form={toSignin}/> ) :
				(<Signin form={toLogin}/>)
			}
		</div>
	);
}

export default WelcomePage;