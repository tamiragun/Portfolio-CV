import React from "react";
import "./activityCard.css";
import { ActivitiesList } from "./activitiesList";

export class ActivityCard extends React.Component {
  render() {
    return (
      <div>
        <div className="activities">
          <h3>{this.props.title}</h3>
          <ActivitiesList activities={this.props.activities} />
        </div>
      </div>
    );
  }
}
