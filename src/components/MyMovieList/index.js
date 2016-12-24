import React, {Component} from 'react';
import { Link } from 'react-router'

import img from '../../../public/images/movieImage.png'


class MyMovieList extends Component {
    render() {
        return (
            <div className="my-movie">
                <Link to="/mymovie/add">
                    <button type="button" className="my-movie-add-btn">
                        <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;添加电影
                    </button>
                </Link>
                <ul className="my-movie-list">
                    <li className="my-movie-item">
                        <img className="my-movie-image" src={img} alt=""/>
                        <div className="my-movie-info">
                            <h2 className="my-movie-title">Clash-A-Rama! The Series: 12 Days of Clashmas</h2>
                            <span className="my-movie-create-time">20 小时前</span>
                            <span className="my-movie-view-count">7,104,022次观看</span>
                            <p className="my-movie-desc">
                                CLASH-A-RAMA! is an original comedy series based on your favorite Clash of Clans and Clash Royale characters
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
                    </li>
                </ul>
            </div>
        );
    }
}

export default MyMovieList;