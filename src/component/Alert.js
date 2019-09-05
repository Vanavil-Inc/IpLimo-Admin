import React, { Component } from "react";

class Alert extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isActive: false,
      msg: this.props.msg
    };
  }

  enableError(msg) {
    this.setState({
      isActive: true,
      msg: msg
    });
    this.setTimeOut();
  }

  setTimeOut = () => {
    window.setTimeout(() => {
      this.setState({
        isActive: false
      });
    }, 3000);
  };

  render() {
    if (this.state.isActive) {
      return (
        <div className="alert alert-danger ml-4 mr-4">
          <label> {this.state.msg}</label>
        </div>
      );
    }
    return <div />;
  }
}

export default Alert;
// let styles = {
//   spinner: {
//     width: "70px",
//     height: "70px"
//   }
// };
