import express from 'express'

import movie from '../controllers/movie'


const router = express.Router()


router.get('/', movie.getMovies)

router.get('/byuserid/:userId', movie.getMoviesByUserId)
router.get('/bymovieid/:movieId', movie.getMovieByMovieId)
router.post('/createmoviebyuserid/:userId', movie.addMovie)
router.post('/update/:movieId', movie.updateMovie)
router.delete('/delete/:movieId', movie.deleteMovie)


export default router


