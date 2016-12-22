import React, {Component} from 'react';
import { connect } from 'react-redux'


import LoginForm from '../../components/LoginForm'
import { loginAction } from '../../actions/login'
import { setUser } from '../../actions/auth'

import './style.css'

class LoginPage extends Component {
    render() {
        return (
            <div className="form-page">
                <LoginForm {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth : state.auth
    }
}


export default connect(mapStateToProps, { loginAction, setUser })(LoginPage);