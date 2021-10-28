const initialState = {
	auth: false,
	token: null,
	user: {}
};

const auth = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'login':
			state = {
				...state,
				auth: true,
				token: payload.token,
				user: payload.user
			};
			localStorage.setItem('token', payload.token);
			return state;
		case 'login_check':
			state = {
				...state,
				auth: true,
				token: localStorage.getItem('token'),
				user: payload
			};
			return state;
		case 'logout':
			state = initialState;
			localStorage.clear();
			return state;

		default:
			return state;
	}
};
export default auth;
