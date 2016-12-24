import React, {Component} from 'react';
import { Link, Redirect } from 'react-router'
import jwtDecode from 'jwt-decode'

import TextInput from '../TextInput'
import { loginValidator } from '../../utils/validator'
import { saveToken } from '../../utils/storage'

import './style.css'

class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            identify : '',
            password : '',
            isLoading : false,
            errors : {}
        }

        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.onFocus = this.onFocus.bind(this)
    }

    onChange(e) {
        const errors = Object.assign({}, this.state.errors)
        if (e.target.value !== '') {
            delete errors[e.target.name]
            this.setState({
                errors
            })
        }

        this.setState({
            [e.target.name] : e.target.value
        })
    }

    isValid() {
        const { errors, isValid } = loginValidator(this.state)

        if (!isValid) {
            this.setState({
                errors
            })
        }

        return isValid

    }

    onBlur(e) {
        e.target.classList.remove('focus')
    }

    onFocus(e) {
        e.target.classList.add('focus')
    }

    onClick() {

        if (this.isValid()) {
            this.setState({
                errors : {},
                isLoading: true
            })
            const { identify, password } = this.state
            this.props.loginAction({ identify, password }) 
                .then((res) => res.json())
                .then((result) => {
                    console.log(result)
                    if (result.success) {
                        console.log(result.token)
                        this.setState({
                            isLoading : false,
                            errors : {}
                        })
                        saveToken(result.token)
                        this.props.setUser(jwtDecode(result.token))
                    } else {
                        this.setState({
                            isLoading : false,
                            errors : Object.assign({}, this.state.errors, result.errors)
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    }

    render() {

        const { identify, password, errors } = this.state
        const { auth } = this.props

        return (
            <div>
                {
                    auth.isAuthentication ?  <Redirect to="/" /> : (
                        
                        <div className="login-form">
                            <h2 className="form-title">登录</h2>
                            <TextInput 
                                label="用户名/邮箱"
                                type="text"
                                placeholder="请输入用户名或者邮箱"
                                name="identify"
                                value={identify}
                                error={errors.identify}
                                onChange={this.onChange}
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}
                            />
                            <TextInput 
                                label="密码"
                                type="password"
                                placeholder="请输入用户密码"
                                name="password"
                                value={password}
                                error={errors.password}
                                onChange={this.onChange}
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}
                            />
                            <div className="form-group">
                                <p className="have-account">
                                    还没有账号？
                                    <Link to="/signup">请注册</Link>
                                </p>
                            </div>
                            <div className="form-group">
                                <button type="button" className="submit-btn" onClick={this.onClick}>登录</button>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default LoginForm;