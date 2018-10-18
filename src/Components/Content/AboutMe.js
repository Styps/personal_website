import React, { Component } from 'react'
import AboutMePicMobile from './../../images/AboutMeImages/AboutMePic_mobile.png';

const AboutMe = React.forwardRef((props, ref) =>
    <section className="content_section" ref={ref}>
        <h2 className="content_header">About Me</h2>
        <img className="about_me_pic" src={ AboutMePicMobile } alt="" />
        <div className="about_me_content">
            <p>Hello, I'm Matthew Stypulkoski. I am an enthusiastic 22 year old from Bergenfield, New Jersey, and I am pursuing work in the fields of software development, IT support, and web design.</p>

            <p>I am driven by my competitive nature and my eagerness to learn. I always put my absolute best effort into everything I do, and if there is some obstacle that appears in front of me, I won't rest until I find a way around it.
            These traits have been noticed by my past colleagues and are always expressed in my work.</p>
            <div className="contact_list">
                <ul>
                    <li><a href="https://www.linkedin.com/in/matthew-stypulkoski-88bb6b112/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="mailto:matt.stypulkoski@gmail.com"><i className="fas fa-envelope"></i></a></li>
                    <li><a href="https://github.com/mstypulk" target="_blank"><i className="fab fa-github"></i></a></li>
                </ul>
            </div>
        </div>
    </section>
);

export default AboutMe;