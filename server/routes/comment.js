import express from 'express'

import comment from '../controllers/comment'

const router = express.Router()



router.get('/movie/:movieId', comment.getMovieComments)
router.post('/movie/:movieId/:userId', comment.addMovieComment)


export default router