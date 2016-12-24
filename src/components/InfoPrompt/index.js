import React, {Component} from 'react';
import classnames from 'classnames'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { removeToken } from '../../utils/storage'
import { setUser } from '../../actions/auth'


class InfoPrompt extends Component {

    logout() {
        removeToken()
        this.props.setUser({})
    }

    render() {
        const { infoPrompt, auth } = this.props
        const { isAuthentication, user } = auth

        const guestRender = (
            <div className={classnames("info-prompt", {"hide" : !infoPrompt})}>
                <div className="auth-info">
                    <Link to="/login" className="login-btn">登录账号</Link>
                </div>
            </div>
        )
        const authRender = (
            <div className={classnames("info-prompt", {"hide" : !infoPrompt})}>
                <h2 className="email">{ user.email }</h2>
                <div className="icon-name">
                    <span className="icon">
                       <i className="fa fa-user-circle" aria-hidden="true"></i> 
                    </span>
                    <span className="name">
                        {user.username}
                    </span>
                </div>
                <div className="auth-info">
                    <button type="button" className="logout-btn" onClick={this.logout.bind(this)}>退出账号</button>
                </div>
                <i className="fa fa-caret-up" aria-hidden="true"></i>
            </div>
        )

        return (
            <div>
                { isAuthentication ? authRender : guestRender }
            </div>
        );
    }
}




export default connect(null, { setUser })(InfoPrompt);