import React, {Component} from 'react';
import { connect } from 'react-redux'

import MyMovieAdd from '../MyMovieAdd'
import { getMovie, updateMovie } from '../../actions/movie'

class MyMovieEdite extends Component {

    render() {

        return (
            <div className="my-movie-edite">
                <MyMovieAdd edite getMovie={this.props.getMovie} updateMovie={this.props.updateMovie} movieId={this.props.params.movieId} />
            </div>
        );
    }
}

export default connect(null, { getMovie, updateMovie })(MyMovieEdite);