import React, {Component} from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { setUser } from '../../actions/auth'
import { toggleSideBar, toggleInfoPrompt } from '../../actions/toggle'
import { removeToken } from '../../utils/storage'



import SearchBar from '../SearchBar'
import InfoPrompt from '../InfoPrompt'


class Header extends Component {

    onClick(e) {
        e.preventDefault()
        removeToken()
        this.props.setUser({})
    } 
    
    onToggleSideBar() {
        this.props.toggleSideBar()
    }

    onToggleInfoPrompt() {
        this.props.toggleInfoPrompt()
    }

    render() {
        const { auth, infoPrompt } = this.props
        const guestRender = (
            <div className="auth-field">
                <Link to="/login">登录</Link> 
                <Link to="/signup">注册</Link> 
            </div>
        )

        const userRender = (
            <div className="auth-field">
                <i onClick={this.onToggleInfoPrompt.bind(this)} className="fa fa-user-circle" aria-hidden="true"></i>   
                <InfoPrompt auth={auth} infoPrompt={infoPrompt} />
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
        auth : state.auth,
        infoPrompt : state.toggle.infoPrompt
    }
}


export default connect(mapStateToProps, { setUser, toggleSideBar, toggleInfoPrompt })(Header);