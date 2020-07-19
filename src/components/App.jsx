import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
