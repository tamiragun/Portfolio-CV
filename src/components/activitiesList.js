import React from "react";

/*Component returns a list of activities*/
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
