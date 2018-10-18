import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Content/Main';
import AboutMe from './Components/Content/AboutMe';
import Projects from './Components/Content/Projects';
import Education from './Components/Content/Education';
import Contact from './Components/Content/Contact';


class App extends Component {

    /* Creates reference to the to be assigned to a DOM element */
    aboutMeLocation = React.createRef();
    educationLocation = React.createRef();
    projectsLocation = React.createRef();
    contactLocation = React.createRef();

    /* Scroll screen to section */
    scrollToSection = (section) => {
        if (section == "AboutMe") {
            this.aboutMeLocation.current.scrollIntoView( {behavior: "smooth", block: "center", inline: "center"} );
        } else if (section == "Education") {
            this.educationLocation.current.scrollIntoView( {behavior: "smooth", block: "center", inline: "nearest"} );
        } else if (section == "Projects") {
            this.projectsLocation.current.scrollIntoView( {behavior: "smooth", block: "center", inline: "nearest"} );
        } else if (section == "Contact") {
            this.contactLocation.current.scrollIntoView( {behavior: "smooth", block: "center", inline: "nearest"} );
        }
    }

  render() {
    return (
      <div className="App">
        <Header clickedIndexLink={ this.scrollToSection } />
        <Main />
        <AboutMe ref={ this.aboutMeLocation } />
        <Education ref={ this.educationLocation } />
        <Projects ref={ this.projectsLocation } />
        <Contact ref={ this.contactLocation } />
      </div>
    );
  }
}

export default App;
