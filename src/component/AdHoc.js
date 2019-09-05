import React, { Component } from "react";
import * as Util from "../constant/Utils";

// import { Nav, Navbar } from "react-bootstrap";
// import Logo from "../assets/ic_logo.png";
// import { FaPhone } from "react-icons/fa";
// import "react-sticky-header/styles.css";
// import StickyHeader from "react-sticky-header";
// import ls from "local-storage";
// import { Redirect } from "react-router";
class AdHoc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <section id="ad-hoc">
          <h1> {Util.ADHOC}</h1>
        </section>
      </div>
    );
  }
}

export default AdHoc;
