import React, { Component } from "react";
import "./App.css";
import Router from "./component/Router";
import ls from "local-storage";
//Not used this class
export default class App extends Component {
  state = {};
  componentDidMount() {
    ls.set("foo1", "bar");
  }
  render() {

    ls.set("foo", "bar");
    return <Router />;
  }
}
