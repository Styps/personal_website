import React, { Component } from 'react';

class NavBar extends Component {

    /* Passes section clicked to Header.js */
    passClickToParent(section) {
        this.props.clickedIndexLink(section);
    }

    render() {
        return (
            <div className="nav_container">
                <nav className="header_nav">
                    <ul>
                        <li><button onClick={ () => this.passClickToParent("Contact") }>CONTACT</button></li>
                        <li><button onClick={ () => this.passClickToParent("Projects") }>PROJECTS</button></li>
                        <li><button onClick={ () => this.passClickToParent("Education") }>EDUCATION</button></li>
                        <li><button onClick={ () => this.passClickToParent("AboutMe") }>ABOUT ME</button></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;