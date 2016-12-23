import React, {Component} from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { setUser } from '../../actions/auth'
import { toggleSideBar } from '../../actions/toggle'
import { removeToken } from '../../utils/storage'


import SearchBar from '../SearchBar'


class Header extends Component {

    onClick(e) {
        e.preventDefault()
        removeToken()
        this.props.setUser({})
    } 
    
    onToggleSideBar() {
        this.props.toggleSideBar()
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
                <i className="fa fa-user-circle" aria-hidden="true"></i>   
                <a href="#" className="logout-btn" onClick={this.onClick.bind(this)}>退出登录</a>
            </div>
        )

        return (
            <header className="page-header">
                <div className="side-menu" onClick={this.onToggleSideBar.bind(this)}>
                    <a className="btn btn-default" href="javascript:;">
                        <i className="fa fa-align-justify" title="Align Justify"></i>
                    </a>
                </div>
                <SearchBar />
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


export default connect(mapStateToProps, { setUser, toggleSideBar })(Header);