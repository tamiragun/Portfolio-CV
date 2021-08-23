import React from "react";
import { SkillsList } from "./skillsList";
import { LinkButton } from "./linkButton";

/*Component returns a list of projects*/
export function ProjectsList(props) {
  const projects = props.projects;

  const projectsList = projects.map((project, i) => (
    <li key={"project_" + i} className="portfolio-li">
      <div className="project-info">
        <h2>{project.title}</h2>
        <div className="stack">
          <SkillsList skills={project.stack}></SkillsList>
        </div>
        <p>{project.description}</p>
      </div>
      <div className="project-links">
        <LinkButton url={project.github_url} title="Github repo"></LinkButton>
        {/*Only display the live site button if there is one*/}
        {project.prod_url && (
          <LinkButton url={project.prod_url} title="Live site"></LinkButton>
        )}
      </div>
    </li>
  ));
  return <ul className="portfolio-ul"> {projectsList} </ul>;
}
