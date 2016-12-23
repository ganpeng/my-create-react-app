import React, {Component} from 'react';

import Header from '../../components/Header'
import SideBar from '../../components/SideBar'


class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Header />
                <SideBar />
            </div>
        );
    }
}


export default HomePage;