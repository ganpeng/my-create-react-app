import React, {Component} from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import moment from 'moment'


import { getUserMovies } from '../../actions/movie' 

import img from '../../../public/images/movieImage.png'


class MyMovieList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies : []
        }
    }

    componentDidMount() {
        const userId = this.props.auth.user.id
        this.props.getUserMovies(userId)
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    this.setState({
                        movies : result.movies
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {

        const moviesList = this.state.movies.map((movie) => {
             return  (<li className="my-movie-item" key={movie.id}>
                        <img className="my-movie-image" src={img} alt=""/>
                        <div className="my-movie-info">
                            <h2 className="my-movie-title">{movie.title}</h2>
                            <span className="my-movie-create-time">{moment(movie.createdAt).startOf('hour').fromNow()}</span>
                            <span className="my-movie-view-count">7,104,022次观看</span>
                            <p className="my-movie-desc">
                                {movie.summary}
                            </p>
                        </div>
                        <div className="my-movie-operator">
                            <button type="button" className="edite-btn">
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;编辑
                            </button>         
                            <button type="button" className="delete-btn">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>&nbsp;删除
                            </button>         
                        </div>
                    </li>)
        })


        return (
            <div className="my-movie">
                <Link to="/mymovie/add">
                    <button type="button" className="my-movie-add-btn">
                        <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;添加电影
                    </button>
                </Link>
                <ul className="my-movie-list">
                    {moviesList}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth : state.auth
    }
}


export default connect(mapStateToProps, { getUserMovies })(MyMovieList);