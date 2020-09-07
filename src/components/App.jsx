import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import AlbumSelection from "./AlbumSelection";
import AlbumCreation from "./AlbumCreation";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create/:style" component={AlbumCreation}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
