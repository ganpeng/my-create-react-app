import express from 'express'

import movie from '../controllers/movie'


const router = express.Router()


router.get('/', movie.getMovies)

router.get('/:userId', movie.getMovie)
router.post('/:userId', movie.addMovie)


export default router


