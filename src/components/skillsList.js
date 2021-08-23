import React from "react";

export function SkillsList(props) {
  const skills = props.skills;
  const skillsList = skills.map((skill, i) => (
    <li key={skill + "_" + i}>{skill}</li>
  ));
  return <ul> {skillsList} </ul>;
}
