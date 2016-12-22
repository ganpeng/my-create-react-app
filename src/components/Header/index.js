import React, {Component} from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { setUser } from '../../actions/auth'
import { removeToken } from '../../utils/storage'



class Header extends Component {

    onClick(e) {
        e.preventDefault()
        removeToken()
        this.props.setUser({})
    } 
    

    render() {
        const { auth } = this.props
        const guestRender = (
            <div className="auth-field">
                <Link to="/login">登录</Link> 
                <Link to="/signup">注册</Link> 
            </div>
        )

        const userRender = (
            <div className="auth-field">
                <span className="user-info">{ auth.user.email }</span>
                <a href="#" onClick={this.onClick.bind(this)}>退出登录</a>
            </div>
        )

        return (
            <header className="page-header">
                <h2 className="logo"></h2>
                { auth.isAuthentication ? userRender : guestRender }
            </header>
        );
    }
}


function mapStateToProps(state) {
    return {
        auth : state.auth
    }
}


export default connect(mapStateToProps, { setUser })(Header);