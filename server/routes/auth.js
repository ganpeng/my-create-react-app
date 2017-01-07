import express from 'express'
import co from 'co'
import jwt from 'jsonwebtoken'

import db from '../models'
import { _compare } from '../utils/hashPassword'

const router = express.Router()

router.post('/', (req, res) => {
    co(function* () {
        const { identify, password } = req.body
        console.log(req.body)
        const user = yield db.User.findOne({
            where : {
                $or : {
                    username : identify,
                    email : identify
                }
            }
        })

        if (!user) {
            return res.json({
                success : false,
                errors : {
                    identify : '用户名或者邮箱不存在'
                }
            })
        }

        if (! (yield _compare(password, user.get('password_digist')))) {
            return res.json({
                success : false,
                errors : {
                    password : '密码不正确'
                }
            })
        }

        const token = jwt.sign({
            id : user.get('id'),
            username : user.get('username'),
            email : user.get('email')
        }, 'jsonwebtokensecret')

        return res.json({
            success : true,
            token
        })

    })
    .catch((err) => {
        console.log(err)
    })
})


export default router
