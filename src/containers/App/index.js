import React, {Component} from 'react';
import { Match } from 'react-router'

import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import HomePage from '../HomePage'

import './style.css'


class App extends Component {
    render() {
        return (
            <div className="content">
                <Match exactly pattern="/" component={LoginPage} />
                <Match pattern="/login" component={LoginPage} />
                <Match pattern="/signup" component={SignUpPage} />
                <Match pattern="/home" component={HomePage} />
            </div>
        );
    }
}

export default App;