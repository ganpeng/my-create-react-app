'use strict'

import co from 'co'
import jwt from 'jsonwebtoken'

import db from '../models'
import { _genSalt, _hash } from '../utils/hashPassword'

export function createUser(req, res) {
    co(function* () {
        console.log(req.body)
        const { username, password, email, phone, isguy, nickName, gender, birthday, desc, avatar  } = req.body

        if (yield db.User.findOne({where : { username }})) {
            return res.json({
                success : false,
                errors : {
                    username : '用户名已经存在'
                }
            })
        }

        if (yield db.User.findOne({where : {email}})) {
            return res.json({
                success : false,
                errors : {
                    email : '邮箱已经被注册'
                }
            })
        }

        const salt = yield _genSalt(10)
        const password_digist = yield _hash(password, salt)

        const user = yield db.User.create({username, email, password_digist, phone, isguy, nickName, gender, birthday, desc, avatar})

        const token = jwt.sign({
            id : user.get('id'),
            username : user.get('username'),
            email : user.get('email')
        }, 'jsonwebtokensecret')

        return res.json({
            success: true,
            token
        })

    })
    .catch((err) => {
        console.log(err)
    })
}



export default {
    createUser
}
