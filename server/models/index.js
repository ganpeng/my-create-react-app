'use strict'

import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

import config from '../config'

const env = process.env.NODE_ENV || 'development'
const currentConfig = config[env]

const sequelize = new Sequelize(
    currentConfig.database, 
    currentConfig.username,
    currentConfig.password,
    {
        host : currentConfig.host,
        dialect : 'postgres',
        pool : {
            max : 5,
            min : 0,
            idle : 1000            
        }
    }
)

let db = {}


fs.readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach((file) => {
        let model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model 
    })


Object.keys(db).forEach((modelName) => {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }    
})


db.sequelize = sequelize
db.Sequelize = Sequelize


export default db