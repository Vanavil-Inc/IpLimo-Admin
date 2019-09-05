import React, { Component } from "react";
import ls from "local-storage";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogIn: ls.get("isLogin") === "true" ? true : false
    };
  }
  Logout = () => {
    console.log("CAll logout in layout");
    ls.clear();
    this.setState({
      isLogIn: false
    });
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}
