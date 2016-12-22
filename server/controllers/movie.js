import co from 'co'

import db from '../models/'


export function addMovie(req, res) {
    co(function* () {
        const UserId = req.params.userId

        const movie = yield db.Movie.create( Object.assign({}, req.body, { UserId : UserId} ) )
        if (movie) {
            return res.json({
                success : true,
                movie
            })
        } else {
            return res.json({
                success : false,
                error : '电影创建失败'
            })
        }

    })
    .catch((err) => {
        console.log(err)
    })
}


export function getMovie(req, res) {
    co(function* () {
        const UserId = req.params.userId
        const movies = yield db.Movie.findAll({ where : { UserId } })


        if (movies) {
            return res.json({
                success : true,
                movies
            })
        } else {
            return res.json({
                success : false,
                error : '您还没有上传自己的电影'
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
}


export function getMovies(req, res) {
    co(function* () {
        const movies = yield db.Movie.findAll({})
        if (movies) {
            return res.json({
                success : true,
                movies
            })
        } else {
            return res.json({
                success : false,
                error : '没有电影'
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
}



export default {
    addMovie,
    getMovies,
    getMovie
}