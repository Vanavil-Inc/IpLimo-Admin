import React, { Component } from "react";
import Toast from "react-bootstrap/Toast";

import Logo from "../assets/ic_logo.png";

export default class AlertComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isActive: false,
      msg: this.props.msg,
      isSuccess: false
    };
  }
  setError(msg) {
    this.setState({
      isActive: true,
      msg: msg,
      isSuccess: false
    });
  }
  setSuccess(msg) {
    this.setState({
      isActive: true,
      msg: msg,
      isSuccess: true
    });
  }

  setShow(status) {
    this.setState({
      isActive: status
    });
  }
  render() {
    return (
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0
          }}
        >
          <Toast
            onClose={() => this.setShow(false)}
            show={this.state.isActive}
            delay={4000}
            autohide
          >
            <Toast.Header className="d-block text-center pb-1">
              <img
                src={Logo}
                style={styles.img}
                className="rounded mr-2"
                alt="logo"
                role="presentation"
              />
              {/* <strong className="mr-auto orange"> Movement Message</strong> */}
              {/* <small>just now</small> */}
            </Toast.Header>
            <Toast.Body>
              <strong
                className={`alert ${
                  this.state.isSuccess ? "success" : "error"
                }`}
              >
                {this.state.msg}
              </strong>
            </Toast.Body>
          </Toast>
        </div>
      </div>
    );
  }
}
let styles = {
  img: {
    width: 70,
    height: 70
  }
};
