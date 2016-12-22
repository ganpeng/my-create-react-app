'use strict'

import compression from 'compression'
import express from 'express'
import cors from 'cors'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'

export default (app) => {

    app.use(cors())
    app.use(compression())
    app.use(express.static(path.join(__dirname, '../../client')))
    app.use(morgan('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }))
}