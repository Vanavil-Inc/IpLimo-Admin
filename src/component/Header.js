import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import * as Util from "../constant/Utils";
import Logo from "../assets/ic_logo.png";
import { FaPhone, FaSignOutAlt } from "react-icons/fa";

import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import ls from "local-storage";
import { Redirect } from "react-router";

const menuItems = [
  { id: 1, name: Util.HOME, link: "/home" },
  { id: 2, name: Util.DASHBOARD, link: "#base-fleet" },
  { id: 3, name: Util.ADHOC, link: "#ad-hoc" },
  { id: 4, name: Util.PAYMENT_DETAILS, link: "#payment" },
  { id: 5, name: Util.REPORTS, link: "#reports" }
];
const activeStyle = { color: "#fff", background: " #29ca8e" };

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
      active: menuItems[0]
    };
  }
  _handleClick(menuItem) {
    this.setState({ active: menuItem });
  }

  Logout = () => {
    ls.clear();
    // this.props.userLogout();
    this.setState({
      home: true
    });
  };
  render() {
    if (this.state.home === true) {
      return <Redirect to="/login" />;
    } else
      return (
        <StickyHeader
          header={
            <header className="header header-bg">
              <div className="container">
                <Navbar expand="lg">
                  <Navbar.Brand href="#home">
                    <img
                      className="img-responsive header-logo"
                      src={Logo}
                      alt=""
                    />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="header-menu-center"
                  >
                    <Nav className="mr-auto header-menu-center">
                      {menuItems.map((menuItem, index) => (
                        <Nav.Link
                          key={index}
                          className="pl-3 pr-3"
                          style={
                            this.state.active === menuItem ? activeStyle : {}
                          }
                          onClick={this._handleClick.bind(this, menuItem)}
                          href={menuItem.link}
                        >
                          {menuItem.name}
                        </Nav.Link>
                      ))}
                    </Nav>
                    <Navbar.Collapse className="justify-content-end col-xl-3 p-0">
                      <Navbar.Text>
                        {/* <a href=""> */}
                        <FaPhone className="header-phone" />
                        {Util.MOBILE_NUMBER}
                        {/* </a> */}
                      </Navbar.Text>
                    </Navbar.Collapse>
                  </Navbar.Collapse>
                </Navbar>
                <div
                  className="mr-2 text-right pr-2 pb-1 cursor"
                  onClick={this.Logout}
                >
                  <FaSignOutAlt aria-hidden="true" />
                  &nbsp;Logout
                </div>
              </div>
            </header>
          }
        ></StickyHeader>
      );
  }
}

export default Header;
