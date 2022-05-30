const _token = localStorage.getItem('_token')
const ACCESS_TOKEN_KEY = "_token";
export const DEFAULT_TOKEN = localStorage.getItem(ACCESS_TOKEN_KEY);
export const loginToken = _token
export const CONTENT_TYPE_LOGIN = { "Authorization": `Bearer`, "Content-Type": "application/x-www-form-urlencoded" };
export const CONTENT_TYPE_DEFAULT = { "Authorization": `${_token}`, "Content-Type": "application/x-www-form-urlencoded" };

const SERVER_PATH = process.env.REACT_APP_SERVER_PATH || 'http://localhost:3333/api'

export const API_LOGIN_INFORMATION = `${SERVER_PATH}/users/authenticate`

export const API_GET_MOVIES_LIST = `${SERVER_PATH}/movies/`
