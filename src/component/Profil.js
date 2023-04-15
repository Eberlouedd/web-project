import React from "react";
import Logout from "./Logout";
import './../style/profil.scss'
import Cookies from "js-cookie";
import { getCurrentUser } from "./utils";


const Profil = (props) => {

	return(
		<div className="profil">
			<Logout logout={props.logout}/>
			<img src="default.jpg" alt="profil" className="profil-picture" />
			<h1 className="dynamic">{getCurrentUser(Cookies.get('name')).pseudo}</h1>
			<div>
			</div>
			<div>
				<p className="lvlInfo">{getCurrentUser(Cookies.get('name')).bio}</p>
			</div>
		</div>
	);
}

export default Profil;