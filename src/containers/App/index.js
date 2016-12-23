import React, {Component} from 'react';
import { Match } from 'react-router'

import HomePage from '../HomePage'
import SignUpPage from '../SignUpPage'
import LoginPage from '../LoginPage'

import './style.css'

class App extends Component {
    render() {
        return (
            <div className="content">
                <Match pattern="/" component={HomePage} />
                <Match exactly pattern="/login" component={LoginPage} />
                <Match exactly pattern="/signup" component={SignUpPage} />
            </div>
        );
    }
}

export default App;