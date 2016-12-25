
import setHeader from '../utils/setHeader'


export function createMovie(userId, movieData) {
    return dispatch => {
        return fetch(`/api/movie/${userId}`, {
            method : 'POST',
            headers : setHeader(),
            body : JSON.stringify(movieData)
        })
    }
}


export function getUserMovies(userId) {
    return dispatch => {
        return fetch(`/api/movie/${userId}`, {
            method : 'GET',
            headers : setHeader()
        })
    }
}