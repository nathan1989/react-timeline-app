import React, { Component } from 'react'
import SearchForm from './SearchForm'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchVisible: false
        }
    }
    showSearch(){
        this.setState({
            searchVisible: !this.state.searchVisible
        })
    }

    render(){
        // classes to add to <input/> element
        let searchInputClasses = ['searchInput']
        // update class array if state is visible
        if(this.state.searchVisible) searchInputClasses.push('active')
        return (
            <div className="header">
                <div className="menuIcon">
                    <div className="dashTop"></div>
                    <div className="dashBottom"></div>
                    <div className="circle"></div>
                </div>

                <span className="title">{this.props.title}</span>

                <SearchForm
                    searchVisible={this.state.searchVisible}
                    onSubmit={this.props.onSubmit} />

                <div 
                    onClick={this.showSearch.bind(this)}
                    className="fa fa-search searchIcon"></div>
            </div>
        )
    }
}

export default Header