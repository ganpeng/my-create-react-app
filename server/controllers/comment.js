import co from 'co'

import db from '../models'


export function getMovieComments(req, res) {
    co(function*() {

        const MovieId = req.params.movieId

        const comments = yield db.Comment.findAll({ 
            where : { MovieId }, 
            include : [{ model : db.Movie, include : [{ model : db.User }] }, { model : db.Comment }]
        }) 

        return res.json({
            success : true,
            comments
        })
    })
    .catch((err) => {
        console.log(err)
    })
}


export function addMovieComment(req, res) {
    co(function* () {
       const MovieId = req.params.movieId 
       const UserId = req.params.userId

       const comment = yield db.Comment.create(Object.assign({}, req.body, { MovieId : MovieId, UserId : UserId }))

       if (comment) {
           return res.json({
               success : true,
               comment
           })
       }

    })
    .catch((err) => {
        console.log(err)
    })
}



export default {
    getMovieComments,
    addMovieComment
}