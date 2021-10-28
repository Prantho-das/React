import { toast } from 'react-toastify';
import axios from 'axios';

let token = localStorage.getItem('token')
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use((config) => {
	config.headers.Authorization = token ? `Bearer ${token}` : null
	return config;
});

const toastify = (color, message) => {
	toast[color](message, {
		position: 'top-right',
		autoClose: 3000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: false
	});
};

export const description=(data)=>{
	return (data.slice(0, process.env.REACT_APP_EXCERPT))+'...'
}
export default toastify;
