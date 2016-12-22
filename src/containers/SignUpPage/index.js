import React, {Component} from 'react';
import { connect } from 'react-redux'

import SignUpForm from '../../components/SignUpForm'
import { signUpAction } from '../../actions/login'
import { setUser } from '../../actions/auth'

class SignUpPage extends Component {
    render() {
        return (
            <div className="form-page">
                <SignUpForm {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth : state.auth
    }
}


export default connect(mapStateToProps, { signUpAction, setUser })(SignUpPage);