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


export function getMoviesByUserId(req, res) {
    co(function* () {
        const UserId = req.params.userId
        const movies = yield db.Movie.findAll({ where : { UserId }, order: '"createdAt" DESC' })  // 两种排序方式  DESC  和  ASC   ,注意此处写法，双引号不能丢掉


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


export function getMovieByMovieId(req, res) { 
    co(function* () {

        const { movieId } = req.params

        const movie = yield db.Movie.find({
            where : {
                id : movieId
            }
        })

        if (movie) {
            return res.json({
                success : true,
                movie
            }) 

        } else {
            return res.json({
                success : false,
                error : '电影不存在'
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



function updateMovie(req, res) {
    co(function* () {
        const movieId = req.params.movieId

        const field = [ 'title', 'original_title', 'aka', 'ratings_count', 'wish_count', 'collect_count', 'subtype', 'directors', 'casts', 'writers', 'website', 'pubdate', 'year', 'language', 'genres', 'summary' ]

        const movie = yield db.Movie.find({
            where : {
                id : movieId
            }
        })     

        if (movie) {
            yield movie.update(Object.assign({}, _.pick(req.body, field)))
            return res.json({
                success : true,
                movie
            })
        } else {
            return res.json({
                success : false,
                error : '电影未找到'
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
}


function deleteMovie(req, res) {
    co(function* () {
        const { movieId } = req.params

        const movie = yield db.Movie.findOne({
            where : {
                id : movieId
            } 
        })

        if (movie) {
            yield movie.destroy()
            res.json({
                success : true
            })
        } else {
            res.json({
                success : false,
                error : '删除失败'
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
    getMoviesByUserId,
    getMovieByMovieId,
    updateMovie,
    deleteMovie
}