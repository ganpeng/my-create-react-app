import React, {Component} from 'react';
import { Link, Match } from 'react-router'
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
            <div>
                <header className="page-header">
                    <div className="side-menu" onClick={this.onToggleSideBar.bind(this)}>
                        <span className="btn btn-default" href="">
                            <i className="fa fa-align-justify" title="Align Justify"></i>
                        </span>
                    </div>
                    <SearchBar />
                    { auth.isAuthentication ? userRender : guestRender }
                </header>

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        auth : state.auth
    }
}


export default connect(mapStateToProps, { setUser, toggleSideBar })(Header);