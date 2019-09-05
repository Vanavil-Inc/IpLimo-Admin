import React, { Component } from "react";
import { Form, Image, Button, Row, Col } from "react-bootstrap";
import * as Util from "../constant/Utils";
import Logo from "../assets/ic_logo.png";
import { Redirect } from "react-router";
import ls from "local-storage";
import HttpRequest from "./HttpRequest";
import Loader from "./Loader";
import Alert from "./Alert";

let formData = {};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: ls.get("isLogin") === "true" ? true : false,
      isLoading: false,
      msg: ""
    };
    this.child = React.createRef();
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(value + " = " + name);

    // let { formData } = this.state;
    formData[name] = value;
  };
  loginAdmin = e => {
    e.preventDefault();
    try {
      if (
        formData["mobileNo"] !== undefined &&
        formData["password"] !== undefined
      ) {
        this.setState({
          isLoading: true
        });

        HttpRequest.httpPOST("/login", formData).then(data => {
          console.log(data);
          document.getElementById("loginForm").reset();
          formData = {};

          if (data != null && data.success) {
            formData["mobileNo"] = undefined;
            ls.set("isLogin", "true");
            this.setState({
              home: true,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
            this.child.current.enableError(data.message);
          }
        });
      } else {
        //error
        console.log("error");
        this.child.current.enableError(Util.ENTER_PH_NO_PWD);
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    // const { UserId, Password, validate } = this.state;
    console.log(" ?REDIRECT HOME " + this.state.home);
    if (this.state.home === true) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="h-100">
        <div className="col-xl-12 h-100 admin-bg">
          <Form
            id="loginForm"
            className="col-xl-4 col-md-8 col-sm-10 col-centered login-box text-center"
            onSubmit={e => this.loginAdmin(e)}
          >
            <Image className="col-xs-2 col-centered" src={Logo} />
            <Alert ref={this.child} />
            <Form.Group as={Row} controlId="loginForm">
              <Col className="ml-4 mr-4">
                <Form.Control
                  type="number"
                  name="mobileNo"
                  pattern="[0-9]*"
                  placeholder={Util.enter_phone_number}
                  maxLength="11"
                  onChange={this.handleInputChange}
                />
              </Col>
            </Form.Group>
            <Loader loading={this.state.isLoading} />
            <Form.Group as={Row} controlId="loginForm">
              <Col className="ml-4 mr-4">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                />
              </Col>
            </Form.Group>

            <label className="col-xl-11  mb-3 white  text-right">
              {Util.FORGOT_PWD}
            </label>
            <div className="text-center">
              <Button
                className="btn btn-success btn-width"
                variant="primary"
                type="submit"
              >
                Sign-In
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
