import axios from 'axios';
import toastify from '../../helper';

export const login = (data, setError) => (dispatch) => {
	axios.get('/sanctum/csrf-cookie').then((response) => {
		axios
			.post('/api/login', data)
			.then((result) => {
				if (result.status === 200) {
					dispatch({
						type: 'login',
						payload: result.data
					});
					toastify('success', 'You Are Loggin In');
				}
			})
			.catch((err) => {
				setError({ ...err.response.data });
			});
	});
};
export const login_check = () => (dispatch) => {
	axios.get('/api/user')
		.then((result) => {
			if (result.status === 200) {
				dispatch({
					type: 'login_check',
					payload: result.data
				});
			}
		})
		.catch((err) => {
			console.log(err)
			toastify('info', 'Please Login in,Sir');
		});
};
export const register = (data, setError) => (dispatch) => {
	axios.get('/sanctum/csrf-cookie').then((response) => {
		axios
			.post('/api/register', data)
			.then((result) => {
				if (result.status === 200) {
					toastify('success', 'You Are Registered please Login Now');
				}
			})
			.catch((err) => {
				setError({ ...err.response.data });
			});
	});
};
export const logout = () => (dispatch) => {
	axios.get('/sanctum/csrf-cookie').then((response) => {
		axios
			.post('/api/logout')
			.then((result) => {
				if (result.status === 200) {
					dispatch({ type: 'logout' });
					toastify('success', 'You Are Logged Out');
				}
			})
			.catch((err) => {
				toastify('error', 'Some Problem Occured');
			});
	});
};
