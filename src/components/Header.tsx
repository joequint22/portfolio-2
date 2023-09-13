import "../App.css";
import contactIcon from "./svgs/contactIcon.svg";
import homeIcon from "./svgs/homeIcon.svg";
import aboutIcon from "./svgs/aboutIcon.svg";
import projectsIcon from "./svgs/aboutIcon.svg";
import toggleIcon from "./svgs/toggleIcon.svg";

export interface HomeIcon {
  image?: HTMLImageElement;
}
export default function Nav() {
  return (
    <header>
      <nav className="nav-container py-10 mb-12 flex justify-between">
        <a href="index.html" className="nav-logo">
          DEVELOPEDBYJOE
        </a>

        <div className="nav-menu">
          <ul className="nav-list">

            <li id="home-icon" className="nav-item">
              <a href="#home" className="nav-link">
                <img className="uil uil-estate nav-icon" src={toggleIcon}/>
              </a>
            </li>
            
            <li id="home-icon" className="nav-item">
              <a href="#home" className="nav-link">
                <img className="uil uil-estate nav-icon" src={homeIcon}/>Home
              </a>
            </li>
            <li id="about-icon" className="nav-item">
              <a href="about" className="nav-link ">
                <img className="uil uli-user nav-icon" src={aboutIcon}/>About
              </a>
            </li>

            <li id="contact-icon" className="nav-item">
              <a href="#services" className="nav-link">
                <img className="uil uli-breifcase-alt nav-icon" src={contactIcon}/>Skills
              </a>
            </li>

            <li id="projects-icon" className="nav-item">
              <a href="#portfolio" className="nav-link">
                <img className="uil uli- nav-icon" src={projectsIcon}/>Projects
              </a>
            </li>

            <li id="projects-icon" className="nav-item">
              <a href="#portfolio" className="nav-link">
                <img className="uil uli-contact nav-icon" src={projectsIcon}/>Contact
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}
