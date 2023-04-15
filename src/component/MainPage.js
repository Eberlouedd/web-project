import { useEffect, useState } from 'react';
import Wall from './Wall';
import WelcomePage from './WelcomePage';
import Cookies from 'js-cookie';

const MainPage = (props) => {

	const [connected, setConnected] = useState(1);


	useEffect(() => {
		if(Cookies.get('name'))
			setConnected(0);
	  }, []);
	const getConnected = (user) =>{
		Cookies.set("name", user, { expires: 24 });
		setConnected(0);
	}

	const setLogout = () => {
		Cookies.remove("name", { path: '/', domain: 'localhost' });
		console.log(Cookies.get('name'));
		setConnected(1);
	}

	return (
		<div>
			{connected ? <WelcomePage login={getConnected}/> : <Wall logout={setLogout}/>}
		</div>
	);
}

export default MainPage;