import React, { Component } from 'react';
import LinkedInIconMobile from './../../images/ContactImages/linkedIn-icon-mobile.png';
import GithubIconMobile from './../../images/ContactImages/github_icon_mobile.png';

const Contact = React.forwardRef((props, ref) =>
    <section className="content_section" ref={ref}>
        <h2 className="content_header">Contact Me</h2>
        <div className="contact_content">
            <p align="center">I'd Love to Hear From You!</p>
            <a href="https://www.linkedin.com/in/matthew-stypulkoski-88bb6b112/" target="_blank"><img className="linkedin_icon" src={ LinkedInIconMobile } alt="" /></a>
            <a href="mailto:matt.stypulkoski@gmail.com"><i class="far fa-envelope"></i></a>
            <a href="https://github.com/mstypulk" target="_blank"><img className="github_icon" src={ GithubIconMobile } alt="" /></a>
        </div>
    </section>
);

export default Contact;