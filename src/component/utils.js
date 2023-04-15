

export const getCurrentUser = (current) => {
	const storedUser = JSON.parse(localStorage.getItem('data'));
	const match = storedUser.find(user => user.login === current);
	return match;
}