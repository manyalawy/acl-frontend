import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Login/login";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import HRNav from "./Components/NavBars/hrNav";
import HODNav from "./Components/NavBars/hodNav";

ReactDOM.render(
  <Router>
    <HODNav />
    <Route path="/login" exact component={Login} />
  </Router>,

  document.getElementById("root")
);
