import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <input className="search-field" type="text" placeholder="搜索"/> 
                <button type="button" className="search-btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        );
    }
}

export default SearchBar;