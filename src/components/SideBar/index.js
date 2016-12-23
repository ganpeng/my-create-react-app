import React, {Component} from 'react';
import classnames from 'classnames'
import { connect } from 'react-redux'

class SideBar extends Component {
    render() {
        const { sideBar } = this.props
        return (
            <div className={classnames('side-bar', {'hide' : !sideBar})}>

            </div>    
        );
    }
}

function mapStateToProps(state) {
    return {
        sideBar : state.toggle.sideBar
    }
}



export default connect(mapStateToProps, {})(SideBar);