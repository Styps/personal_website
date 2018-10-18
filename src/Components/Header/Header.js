import React, { Component } from 'react';
import NavBar from './NavBar';
import MobileMenu from './MobileMenu';

class Header extends Component {

    /* Passes section clicked to App.js */
    passClickToParent = (section) => {
        this.props.clickedIndexLink(section);
    }

    render() {
        return (
            <header>
                <MobileMenu clickedIndexLink={ this.passClickToParent } />
                <NavBar clickedIndexLink={ this.passClickToParent } />
            </header>
        );
    }
}

export default Header;