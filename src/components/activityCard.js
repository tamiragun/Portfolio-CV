import React from "react";
import "./activityCard.css";

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

export function ActivitiesList(props) {
  const activities = props.activities;
  const activitiesList = activities.map((activity, i) => (
    <li key={"activity_" + i}>
      <div>
        <h4>{activity.title}</h4>
        <h5>{activity.institution}</h5>
        <h5>{activity.dates}</h5>
        <h5>{activity.location}</h5>
        <p>{activity.description}</p>
      </div>
    </li>
  ));
  return <ul> {activitiesList} </ul>;
}
