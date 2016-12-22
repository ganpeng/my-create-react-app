
import setHeader from '../utils/setHeader'


export function loginAction(userData) {
    return dispatch => {
        return fetch('/api/auth', {
            method : 'POST',
            headers : setHeader(),
            body : JSON.stringify(userData)
        })
    }
}


export function signUpAction(userData) {
    return dispatch => {
        return fetch('/api/user', {
            method : 'POST',
            headers : setHeader(),
            body : JSON.stringify(userData)
        })
    }
}
