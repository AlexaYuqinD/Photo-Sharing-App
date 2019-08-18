export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADVANCED = 'ADVANCED';


export function logIn (userId, firstName) {
    return { type: LOGIN, userId, firstName };
}

export function logOut () {
    return { type: LOGOUT };
}

export function setAdvanced (advanced) {
    return { type: ADVANCED, advanced };
}