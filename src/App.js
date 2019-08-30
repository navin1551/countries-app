import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
        </main>
      </div>
    );
  }
}
