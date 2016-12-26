
import setHeader from '../utils/setHeader'





export function createMovie(userId, movieData) {
    return dispatch => {
        // return fetch(`/api/movie/${userId}`, {
        return fetch(`/api/movie/createmoviebyuserid/${userId}`, {
            method : 'POST',
            headers : setHeader(),
            body : JSON.stringify(movieData)
        })
    }
}


export function getUserMovies(userId) {
    return dispatch => {
        return fetch(`/api/movie/byuserid/${userId}`, {
            method : 'GET',
            headers : setHeader()
        })
    }
}


export function getMovie(movieId) {
    return dispatch => {
        // return fetch(`/api/movie/${movieId}`, {
        return fetch(`/api/movie/bymovieid/${movieId}`, {
            method : 'GET',
            headers : setHeader()
        })
    } 
}


export function updateMovie(movieId, movieData) {
    return dispatch => {
        return fetch(`/api/movie/update/${movieId}`, {
            method : 'POST',
            headers : setHeader(),
            body : JSON.stringify(movieData)
        })
    }
}

export function deleteMovie(movieId) {
    return dispatch => {
        return fetch(`/api/movie/delete/${movieId}`, {
            method : 'DELETE',
            headers : setHeader()
        })
    }
}