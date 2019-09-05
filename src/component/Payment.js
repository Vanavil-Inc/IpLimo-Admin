import React, { Component } from "react";
import * as Util from "../constant/Utils";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <section id="payment">
          <h1> {Util.PAYMENT_DETAILS}</h1>
        </section>
      </div>
    );
  }
}

export default Payment;
