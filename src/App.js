import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { Cv } from "./pages/CV.js";
import { Portfolio } from "./pages/Portfolio";
import { Header } from "./components/header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <nav className="nav-bar">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="nav-link-active"
              exact
            >
              CV
            </NavLink>

            <NavLink
              to="/portfolio"
              className="nav-link"
              activeClassName="nav-link-active"
              exact
            >
              Portfolio
            </NavLink>
          </nav>
          <Switch>
            <Route path="/portfolio">
              <Portfolio></Portfolio>
            </Route>
            <Route path="/">
              <Cv></Cv>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
