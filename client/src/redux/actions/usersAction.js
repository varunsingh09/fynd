import {
	PENDING_LOGIN, USER_LOGIN, ERROR_LOGIN
} from "./types";
import qs from 'qs';
import axios from "axios";
import * as Api from "./../../api"

import { handleHTTPError, addAlert, deleteAlert, updateAlert } from "./../../utils"


export function userLogin(payload) {
	return async (dispatch) => {
		dispatch({
			type: PENDING_LOGIN,
		});

		let OAUTH_KEY = {
			"username": "storelocator",
			"password": "storelocator@india"
		}
		let { email, password } = payload
		await axios.post(`${Api.API_LOGIN_INFORMATION}`, qs.stringify({ email: btoa(email), token: btoa(password) }), {
			headers: Api.CONTENT_TYPE_LOGIN,
			auth: OAUTH_KEY
		}).then((response) => {
			dispatch({
				type: USER_LOGIN,
				payload: response,
			});
			if (response.status === 200) {
				localStorage.setItem('_token', response.data.data.token)
				localStorage.setItem('read', response.data.data.user.read)
				localStorage.setItem('write', response.data.data.user.write)
				localStorage.setItem('delete', response.data.data.user.delete)
				window.location.href='/'
			}

		}).catch(err => {

			dispatch({
				type: ERROR_LOGIN,
				error: handleHTTPError(err),
			});
		});

	};

}
