import React, { Component } from "react";
// import { Nav, Navbar } from "react-bootstrap";
// import * as Util from "../constant/Utils";
// import Logo from "../assets/ic_logo.png";
// import { FaPhone } from "react-icons/fa";
// import "react-sticky-header/styles.css";
// import StickyHeader from "react-sticky-header";
// import ls from "local-storage";
// import { Redirect } from "react-router";

import * as Util from "../constant/Utils";

class BaseFleet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <section id="base-fleet">
          <h1> {Util.DASHBOARD}</h1>
        </section>
      </div>
    );
  }
}

export default BaseFleet;
