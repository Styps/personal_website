import React from 'react';
import HighRollerScreenShotMobile from './../../images/ProjectsImages/HighRollerTitleScreenShot_mobile.png';
import BlenderIconMobile from './../../images/ProjectsImages/BlenderIcon_mobile.png';
import Unity3DIconMobile from './../../images/ProjectsImages/Unity3DIcon_mobile.png';
import MuseScoreIconMobile from './../../images/ProjectsImages/MuseScoreIcon_mobile.png';

const Projects = React.forwardRef((props, ref) =>
    <section className="content_section" ref={ref}>
        <h2 className="content_header">Personal Projects</h2>

        <div className="projects_content">

            <div className="projects_summary">
            <h3 className="summary_header">High Roller</h3>
                <p>A 3D dice rolling game built using the Unity3D game engine. Try to score big as you roll your 3 dice onto the board.
                Aim for the score multipliers, and adjust your dice before rolling to set yourself up for a nice, high roll!</p>
            </div>
            <div className="game_route_container">
                <img src={ HighRollerScreenShotMobile } alt="" />
                <p><a className="game_link" href="https://mstypulk.github.io/HighRoller/" target="_blank" rel="noopener noreferrer">Play the Game!</a></p>
                <p className="side_note">Note: Game cannot be played on mobile devices.</p>
            </div>
        </div>

        <div className="technologies_used_container">
            <div className="summary_container">
                <h3 className="summary_header">Technologies Used</h3>
                <ul>
                    <li>Unity3D Game Engine</li>
                    <li>C# Programming Language</li>
                    <li>Blender</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>MuseScore 2.0</li>
                </ul>
            </div>
            <div className="icon_container">
                <div className='icon'>
                    <img className='unity' src={ Unity3DIconMobile } alt="" />
                    <p className='used_for'>Game Engine</p>
                </div>
                <div className='icon'>
                    <img className='blender' src={ BlenderIconMobile } alt="" />
                    <p className='used_for'>3D Modeling</p>
                </div>
                <div className='icon'>
                    <img className='musescore' src={ MuseScoreIconMobile } alt="" />
                    <p className='used_for'>Background Music</p>
                </div>
            </div>
        </div>
    </section>
);

export default Projects;
