const ACCESS_TOKEN_KEY = "_token";
//const BEARER = "Bearer "

const DEFAULT_TOKEN = localStorage.getItem(ACCESS_TOKEN_KEY);
export const TOKEN = DEFAULT_TOKEN
export const CONTENT_TYPE = { "Content-Type": "application/json" };
export const CONTENT_TYPE_LOGIN = { "Authorization": `Basic ZGV2Z2xhbi1jbGllbnQ6V2ViQ2xpZW50QDA5MDEyMDE5`, "Content-Type": "application/x-www-form-urlencoded" };


export const login = (data, access_token) => {
    console.log('data.type', data)

    window.location = "/users/dashboard"
}
export const logout = () => {
    localStorage.clear();
    window.location = "/login"
}

export const isLogin = () => {
    if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
        return true;
    }
    return false;
}

export const token = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export const permission = () => {
    return { 'read': localStorage.getItem('read'), 'write': localStorage.getItem('write') , 'delete': localStorage.getItem('delete') };
}
export const userType = () => {
    return localStorage.getItem('_type') || 'store';
}
