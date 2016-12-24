import React, {Component} from 'react';
import { Match } from 'react-router'

import HomePage from '../HomePage'

import './style.css'

class App extends Component {
    render() {
        return (
            <div className="content">
                <Match pattern="/" component={HomePage} />
            </div>
        );
    }
}

export default App;