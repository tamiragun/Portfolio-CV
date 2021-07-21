import React from "react";
import TG_photo from "../assets/TG_photo.jpg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import "./about.css";

export class About extends React.Component {
  render() {
    return (
      <div>
        <div className="profile-picture">
          <img src={TG_photo} alt="Photo of Tamira" height="300px;" />
        </div>

        <div className="contact-info">
          <h3>Contact</h3>
          <p>t.gunzburg@gmail.com</p>
          <p>+27 81 393 9922</p>
          <div className="social-links">
            <a href="https://github.com/tamiragun" target="_blank">
              <img src={github} alt="Github icon" height="24px" />
            </a>
            <a
              href="https://www.linkedin.com/in/tamiragunzburg/"
              target="_blank"
            >
              <img src={linkedin} alt="Linkedin icon" height="24px" />
            </a>
          </div>
        </div>
        <div className="stack">
          <h3>Stack</h3>
          <SkillsList skills={this.props.skills} />
        </div>
      </div>
    );
  }
}

export function SkillsList(props) {
  const skills = props.skills;
  const skillsList = skills.map((skill, i) => (
    <li key={skill + "_" + i}>{skill}</li>
  ));
  return <ul> {skillsList} </ul>;
}
