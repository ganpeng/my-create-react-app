'use strict'


import user from './user'
import movie from './movie'
import auth from './auth'
import comment from './comment'

import co from 'co'
import db from '../models'

export default (app) => {

    app.use('/api/movie', movie)
    app.use('/api/user', user)
    app.use('/api/auth', auth)
    app.use('/api/comment', comment)

    app.post('/api/test', (req, res) => {

        co(function* () {

            const { currentPage, perPage } = req.body

            const movies = yield db.Movie.findAll({
                limit : perPage,
                offset : (currentPage - 1) * perPage
            })
            const count = yield db.Movie.count({})

            if(movies) {
                return res.json({
                    success : true,
                    totalPage : Math.ceil(count / perPage),
                    currentPage : currentPage,
                    movies
                })
            } else {
                return res.json({
                    success : false,
                    error : '错误'
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    })
    
}