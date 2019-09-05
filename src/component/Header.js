import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import * as Util from "../constant/Utils";
import Logo from "../assets/ic_logo.png";
import { FaPhone } from "react-icons/fa";
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

                      {/* <Nav.Link className="active pl-3 pr-3" href="#home">
                        {Util.HOME}
                      </Nav.Link>
                      <Nav.Link className=" pl-3 pr-3" href="#base-fleet">
                        {Util.DASHBOARD}
                      </Nav.Link>
                      <Nav.Link className=" pl-3 pr-3" href="#ad-hoc">
                        {Util.ADHOC}
                      </Nav.Link>
                      <Nav.Link className=" pl-3 pr-3" href="#payment">
                        {Util.PAYMENT_DETAILS}
                      </Nav.Link>
                      <Nav.Link className=" pl-3 pr-3" href="#reports">
                        {Util.REPORTS}
                      </Nav.Link> */}
                    </Nav>

                    <Navbar.Collapse className="justify-content-end col-xl-3 p-0">
                      <Navbar.Text>
                        {/* <a href=""> */}
                        <i className="fa fa-phone"></i>
                        <FaPhone className="header-phone" />
                        {Util.MOBILE_NUMBER}
                        {/* </a> */}
                      </Navbar.Text>
                    </Navbar.Collapse>
                  </Navbar.Collapse>
                </Navbar>
                <label className="d-none" onClick={this.Logout}>
                  Logout
                </label>

                {/* <nav class="navbar navbar-expand-lg navbar-light">
            <div class="header-logo">
              <NavLink to="/">
                <img class="img-responsive" alt="" />
              </NavLink>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse " id="navbarNav">
              <Image className="col-xs-2 header-logo" src={Logo} />
              <ul class="nav navbar-nav header-menu-center">
                <li class={"active nav-item  mr-4"}>
                  <NavLink class="nav-link" to="/" activeStyle={activeStyle}>
                    {Util.HOME}
                  </NavLink>
                </li>

                <li class="nav-item mr-4">
                  <NavLink
                    class="nav-link"
                    to="/recentjobs"
                    activeStyle={activeStyle}
                  >
                    {Util.DASHBOARD}
                  </NavLink>
                </li>

                <li class="nav-item mr-4">
                  <NavLink
                    class="nav-link"
                    to="/"
                    exact
                    activeStyle={activeStyle}
                  >
                    {Util.ADHOC}
                  </NavLink>
                </li>
                <li class="nav-item mr-4">
                  <NavLink
                    class="nav-link"
                    to="/contact1"
                    exact
                    activeStyle={activeStyle}
                  >
                    {Util.PAYMENT_DETAILS}
                  </NavLink>
                </li>
                <li class="nav-item mr-4">
                  <NavLink
                    class="nav-link"
                    to="/contac2t"
                    exact
                    activeStyle={activeStyle}
                  >
                    {Util.REPORTS}
                  </NavLink>
                </li>
              </ul>

              <a href="#">
                <i class="fa fa-phone"></i> {Util.MOBILE_NUMBER}
              </a>
            </div>
          </nav> */}
              </div>
            </header>
          }
        ></StickyHeader>
      );
  }
}

export default Header;
