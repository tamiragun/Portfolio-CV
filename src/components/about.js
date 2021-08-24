import React from "react";
import TG_photo from "../assets/TG_photo.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import { SkillsList } from "./skillsList";
import "./about.css";

export class About extends React.Component {
  render() {
    return (
      <div>
        <div className="profile-picture">
          <h3 className="quick-info">Quick info</h3>
          <img src={TG_photo} alt="Tamira Gunzburg" height="300px;" />
        </div>

        <div className="contact-info">
          <h3>Contact</h3>
          <p>t.gunzburg@gmail.com</p>
          <p>+27 81 393 9922</p>
          <div className="social-links">
            <a
              href="https://github.com/tamiragun"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Github icon" height="24px" />
            </a>
            <a
              href="https://www.linkedin.com/in/tamiragunzburg/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin icon" height="24px" />
            </a>
          </div>
        </div>
        <div className="stack">
          <h3>Stack</h3>
          <SkillsList skills={this.props.skills} />
        </div>
        <div className="intro">
          <h3>About me</h3>
          <p>
            After working for ten years as a political lobbyist, I decided to
            transition into the tech industry. First, I joined a tech startup,
            where I wore multiple hats. These included product, data, and
            marketing roles. Now that I have completed an intensive bootcamp in
            software engineering, I am ready to complete the transtition to
            tech. I'm looking for a software development role where I can learn,
            grow, and and make an impact.
          </p>
        </div>
      </div>
    );
  }
}
