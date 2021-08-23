import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-title">
          <h1>Tamira Gunzburg</h1>
        </div>
      </header>
    );
  }
}
