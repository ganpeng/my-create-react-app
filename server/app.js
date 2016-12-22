'use strict'

import express from 'express'
import path from 'path'

import db from './models'

import middleware from './config/express'
import routes from './routes'


const port = process.env.PORT || 8080
const app = express()

middleware(app)
routes(app)


db.sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`)
        })


        app.get("/", (req, res) => {
            res.send('Hello, world!!!')
        })
    })