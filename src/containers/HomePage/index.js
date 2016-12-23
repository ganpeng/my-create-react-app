import React, {Component} from 'react';

import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import Nav from '../../components/Nav'
import HomeContent from '../../components/HomeContent'


class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Header />
                <Nav />
                <HomeContent />
                <SideBar />
            </div>
        );
    }
}


export default HomePage;