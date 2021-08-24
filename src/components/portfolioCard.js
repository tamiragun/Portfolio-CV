import React from "react";

import { ProjectsList } from "./projectsList";
import "./portfolioCard.css";

export class PortfolioCard extends React.Component {
  render() {
    return (
      <div>
        <div className="portfolio">
          <ProjectsList projects={this.props.projects} />
        </div>
      </div>
    );
  }
}
