import axios from 'axios';

export const API_URL = 'http://localhost:5000/api';

const $api = axios.create({
	withCredentials: false,
	baseURL: API_URL,
	headers: {
		'Access-Control-Allow-Origin' : '*',
		'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
	}
})

// $api.interceptors.request.use(config => {
// 	config.headers.
// })

$api.interceptors.response.use(config => {
	return config;
})

export default $api;