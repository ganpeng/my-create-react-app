import React, {Component} from 'react';
import classnames from 'classnames'

class InfoPrompt extends Component {
    render() {

        const { infoPrompt, auth } = this.props
        const { user } = auth

        return (
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
                <div className="logout-field">
                    <button className="logout-btn">退出账号</button>
                </div>
            </div>
        );
    }
}




export default InfoPrompt;