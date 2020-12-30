import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Login/login";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route path="/login" exact component={Login} />
  </Router>,

  document.getElementById("root")
);
