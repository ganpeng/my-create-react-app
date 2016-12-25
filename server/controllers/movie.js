import co from 'co'
import * as _ from 'lodash'

import db from '../models/'


export function addMovie(req, res) {
    co(function* () {
        const UserId = req.params.userId

        const field = [ 'title', 'original_title', 'aka', 'ratings_count', 'wish_count', 'collect_count', 'subtype', 'directors', 'casts', 'writers', 'website', 'pubdate', 'year', 'language', 'genres', 'summary' ]

        const movie = yield db.Movie.create( Object.assign({}, _.pick(req.body, field), { UserId : UserId} ) )
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