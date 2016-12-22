
export function saveToken(token) {
    if (token) {
        localStorage.setItem('token', token)
    }
}


export function getToken() {
    return localStorage.getItem('token')
}


export function removeToken() {
    localStorage.removeItem('token')
}