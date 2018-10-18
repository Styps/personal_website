import React, { Component } from 'react';
import PictureOfMeMobile from './../../images/BannerImages/PictureOfMe_mobile.png';

class Main extends Component {
    render() {
        return (
            <section className="main_section_container">
                <div className="main_section">
                    <div className="main_header_container">
                        <h1>Matthew Stypulkoski</h1>
                        <h2>Always Thinking Ahead,</h2>
                        <h2>Always Ready.</h2>
                    </div>
                    <img className="self_pic" src={ PictureOfMeMobile } alt="" />
                </div>
            </section>

        );
    }
}

export default Main;