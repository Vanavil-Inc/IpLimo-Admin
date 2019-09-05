import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Home from "./Home";
import { Redirect } from "react-router";

// console.log("ROUTING ");
// let isLoggin = ls.get("isLogin") === "true" ? true : false;
// console.log("ROUTING =" + isLoggin + " =" + ls.get("isLogin"));
const NotFound = () => <Redirect to="/login" />;

const routing = (
  <Router>
    <Layout>
      <Route path="/login" exact component={Login} />
      <Route path="/home" component={Home} />

      <Route component={NotFound} />

      {/* {isLoggin ? (
        <Route path="/home" exact component={Home} />
      ) : (
        <Route path="/" exact component={Login} />
      )} */}

      {/* <Route path="/registration" component={RegisterLayout} />
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/recentjobs" component={Recent} />
      <Route path="/contact" component={Contact} />
      <Route path="/editprofile" component={Profile} /> */}
    </Layout>
  </Router>
);

export default routing;
