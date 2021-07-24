import React from "react";
import { SkillsList } from "./about";

export class MoreInfo extends React.Component {
  render() {
    return (
      <div className="more-info">
        <div className="skills">
          <h3>Skills</h3>
          <SkillsList skills={this.props.skills} />
        </div>
        <div className="references">
          <h3>References</h3>
          <p>
            References available on request. In addition, feel free to explore
            my recent software development projects on GitHub.
          </p>
        </div>
        <div className="admin">
          <h3>Admin</h3>
          <table>
            <tbody>
              <tr>
                <td className="table-title">Timezone:</td>
                <td className="table-description">SAST</td>
              </tr>
              <tr>
                <td className="table-title">Location:</td>
                <td className="table-description">Cape Town, South Africa</td>
              </tr>
              <tr>
                <td className="table-title">Citizenship:</td>
                <td className="table-description">
                  SA permanent resident, Belgian citizen
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
