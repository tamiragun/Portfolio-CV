import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Cv } from "./pages/CV.js";
import { Portfolio } from "./pages/Portfolio";
import { Header } from "./components/header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
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
