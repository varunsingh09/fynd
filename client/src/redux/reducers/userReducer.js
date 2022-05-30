/* eslint-disable import/no-anonymous-default-export */
import {
	PENDING_LOGIN, USER_LOGIN, ERROR_LOGIN

} from "./../actions/types";


const initialState = {
	login: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case USER_LOGIN:
			return {
				...state,
				login: action.payload && action.payload.data && action.payload.data.data ? action.payload.data.data : [],
				pending_login: false,
			}
		case PENDING_LOGIN:
			return {
				...state,
				pending_login: true,
			}
		case ERROR_LOGIN:
			return {
				...state,
				error_login: action.payload,
			}

		default:


			return state
	}
}