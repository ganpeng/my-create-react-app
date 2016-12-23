import React, {Component} from 'react';
import { Link } from 'react-router'


class Nav extends Component {
    render() {
        return (
                <div className="nav-bar">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" activeOnlyWhenExact activeClassName="active">首页</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/movie" activeClassName="active">电影</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/music" activeClassName="active">音乐</Link>
                        </li> 
                    </ul>
                </div>
        );
    }
}


export default Nav;