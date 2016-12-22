import React, {Component} from 'react';
import { Link, Redirect } from 'react-router'
import jwtDecode from 'jwt-decode'

import TextInput from '../TextInput'
import { signUpValidator } from '../../utils/validator'
import { saveToken } from '../../utils/storage'

class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            email : '',
            password : '',
            confirmPassword : '',
            errors : {},
            isLoading : false
        }

        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
    }

    onChange(e) {
        const errors = Object.assign({}, this.state.errors)

        if (e.target.value !== '') {
            delete errors[e.target.name]
            this.setState({ errors })
        }

        this.setState({
            [e.target.name] : e.target.value
        })
    }

    isValid() {
        const { errors, isValid } =  signUpValidator(this.state)


        if (!isValid) {
            this.setState({
                errors
            })
        }

        return isValid

    }

    onFocus(e) {
        e.target.classList.add('focus')     
    }


    onBlur(e) {
        e.target.classList.remove('focus')     
    }

    onClick() {

        if (this.isValid()) {
            const { username, email, password } = this.state
            this.setState({
                errors : {},
                isLoading : true 
            })
            this.props.signUpAction({username, email, password})
                .then((res) => res.json()) 
                .then((result) => {
                        this.setState({
                           isLoading : false 
                        })
                    if (result.success) {
                        saveToken(result.token)              
                        this.props.setUser(jwtDecode(result.token))
                    } else {
                        this.setState({
                            errors : Object.assign({}, this.state.errors, result.errors)
                        })
                    }
                })
                .catch((err) => {
                    this.setState({
                        isLoading : false
                    })
                    console.log(err)
                })
        }
        
    }


    render() {
        const { username, email, password, confirmPassword, errors } = this.state
        const { auth } = this.props

        return (
            <div>
            { 
                auth.isAuthentication ? <Redirect to="/home" /> :  (
                    
                    <div className="signup-form">
                        <h2 className="form-title">注册</h2> 
                        <TextInput
                            type="text"
                            label="用户名"
                            name="username"
                            value={username}
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            placeholder="请输入用户名"
                            error={errors.username}
                        />
                        <TextInput 
                            type="text"
                            label="邮箱"
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            placeholder="请输入邮箱"
                            error={errors.email}
                        />
                        <TextInput 
                            type="password" 
                            label="密码"
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            placeholder="请输入密码"
                            error={errors.password}
                        />
                        <TextInput 
                            type="password" 
                            label="确认密码"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={this.onChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            placeholder="请输入确认密码"
                            error={errors.confirmPassword}
                        />
                        
                        <div className="form-group">
                            <p className="have-account">
                                已经有账号？
                                <Link to="/login">请登录</Link>
                            </p>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn" onClick={this.onClick}>注册</button>
                        </div>
                    </div>
                )
            }
            </div>
        );
    }
}

export default SignUpForm;