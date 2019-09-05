import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Router from "./component/Router";
// import ls from "local-storage";
// import Login from "../src/component/Login";

// let isLoggin = ls.get("isLogin") === "true" ? Router : Login;

ReactDOM.render(Router, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
