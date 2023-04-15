import "./../style/logout.scss"

const Logout = (props) => {

	const handleEdit = () => {
		const overlay = document.querySelector('.overlay');
		overlay.style.display = 'flex';
	}
	return (
		<div className="logout">
			<img src="crayon.png" className="edit" alt="mod" onClick={handleEdit}/>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/OOjs_UI_icon_logOut-ltr-invert.svg/1024px-OOjs_UI_icon_logOut-ltr-invert.svg.png" onClick={props.logout} className="inclogout" alt="logout"/>
		</div>
	);
}

export default Logout;