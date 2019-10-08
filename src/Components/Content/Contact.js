import React from 'react';

const Contact = React.forwardRef((props, ref) =>
    <section className="content_section" ref={ref}>
        <h2 className="content_header">Contact Me</h2>
        <div className="contact_content">
            <div className="contact_link_container">
                <a href="https://www.linkedin.com/in/matthew-stypulkoski-88bb6b112/" className="contact_icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <p>View my career so far</p>
            </div>
            <div className="contact_link_container">
                <a href="mailto:matt.stypulkoski@gmail.com" className="contact_icon"><i class="fas fa-envelope"></i></a>
                <p>I'd love you hear from you!</p>
            </div>
            <div className="contact_link_container">
                <a href="https://github.com/Matt-Stypulkoski" className="contact_icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <p>Take a look at my past projects</p>
            </div>
        </div>
    </section>
);

export default Contact;