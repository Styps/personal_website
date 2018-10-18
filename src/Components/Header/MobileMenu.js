import React, { Component } from 'react';
import classNames from 'classnames';

class MobileMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false, /* Mobile menu starts closed */
            justRefreshed: true /* Prevents menu closing animation from playing when first mounted */
        };
    }

    /* Open/Closes mobile menu */
    toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            justRefreshed: false /* Set to, and keep as false once menu is opened for the first time. */
        });
    }

    /* Passes section clicked to Header.js */
    passClickToParent(section) {
        this.props.clickedIndexLink(section);
    }

    render() {
        var ulClasses = classNames( /* Assigns multiple classnames to element */
            'mobile_menu_nav',
            { open: this.state.isOpen },
            { closed: !this.state.isOpen },
            { first_time: this.state.justRefreshed
        })
        return (
            <div className="mobile_menu">
                <span className="hamburger_menu"><button onClick={ () => this.toggleMenu() }><i class="fas fa-bars"></i></button></span>
                <nav className={ulClasses}>
                    <ul>
                        <li><button onClick={ () => this.passClickToParent("AboutMe") }>ABOUT ME</button></li>
                        <li><button onClick={ () => this.passClickToParent("Education") }>EDUCATION</button></li>
                        <li><button onClick={ () => this.passClickToParent("Projects") }>PROJECTS</button></li>
                        <li><button onClick={ () => this.passClickToParent("Contact") }>CONTACT</button></li>
                    </ul>
                </nav>
            </div>
        );
    }

}

export default MobileMenu;
