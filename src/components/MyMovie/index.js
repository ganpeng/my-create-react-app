import React, {Component} from 'react';
import { Match } from 'react-router'

import MyMovieList from '../MyMovieList'
import MyMovieAdd from '../MyMovieAdd'

class MyMovie extends Component {
    render() {

        const { pathname } = this.props

        return (
            <div className="home-content">
                <Match exactly pattern={`${pathname}`} component={MyMovieList}></Match>
                <Match pattern={`${pathname}/add`} component={MyMovieAdd}></Match>
            </div>
        );
    }
}


export default MyMovie;