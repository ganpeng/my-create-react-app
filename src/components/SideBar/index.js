import React, {Component} from 'react';
import { Link } from 'react-router'
import classnames from 'classnames'
import { connect } from 'react-redux'


class SideBar extends Component {
    render() {
        const { sideBar, auth } = this.props

        const authRender = (
                <ul className="side-list">
                    <li className="side-item">
                        <Link to="/" activeOnlyWhenExact activeClassName="active">
                            <i className="fa fa-home" aria-hidden="true"></i>首页
                        </Link>
                    </li>
                    <li className="side-item">
                        <Link to="/mymovie" activeClassName="active">
                            <i className="fa fa-film" aria-hidden="true"></i>我的电影
                        </Link>
                    </li>
                    <li className="side-item">
                        <Link to="/music" activeClassName="active">
                            <i className="fa fa-music" aria-hidden="true"></i>我的音乐
                        </Link>
                    </li>
                </ul> 

        )


        const guestRender = (
                <ul className="side-list">
                    <li className="side-item">
                        <Link to="/">
                            <i className="fa fa-home" aria-hidden="true"></i>首页
                        </Link>
                    </li>
                </ul> 
            
        )


        return (
            <div className={classnames('side-bar', {'hide' : !sideBar})}>
                { auth.isAuthentication ? authRender : guestRender }
            </div>    
        );
    }
}

function mapStateToProps(state) {
    return {
        sideBar : state.toggle.sideBar,
        auth : state.auth
    }
}



export default connect(mapStateToProps, {})(SideBar);