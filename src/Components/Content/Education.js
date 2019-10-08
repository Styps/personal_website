import React from 'react';
import StevensLogoMobile from './../../images/EducationImages/StevensLogo_mobile.png';

const Education = React.forwardRef((props, ref) =>
    <section className="content_section" ref={ref}>
        <h2 className="content_header">Education</h2>

        <div className="education_content">
            <img className="education_img" src={ StevensLogoMobile } alt="" />
            <h3>Stevens Institute of Technology</h3>
            <p>Class Of 2018</p>
            <p>Hoboken, NJ</p>

            <h4>Earned Bachelor of Science</h4>
            <p>Computer Science</p>
            <p>Graduated with Honors</p>

            <p className="education_text">I learned a lot from my time at Stevens. I came into college with no programming knowledge, but I left with an immense skill set and confidence. Stevens allowed me to collaborate with
            other students through both class projects and my time on the Filipino Association of Steven Tech's (FAST) Executive Board. I gained memorable moments, and made friends for life.</p>
        </div>
    </section>
);

export default Education;