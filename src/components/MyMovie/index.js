import React, {Component} from 'react';

import MyMovieList from '../MyMovieList'

class MyMovie extends Component {
    render() {
        return (
            <div className="home-content">
                <MyMovieList />
            </div>
        );
    }
}

export default MyMovie;