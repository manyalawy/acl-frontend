import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Pages/Staff Members/Login/Login";
import ViewMyProfile from "./Components/Pages/Staff Members/View_my_profile/ViewMyProfile";
import ResetPassowrd from "./Components/Pages/Staff Members/Reset password/ResetPassowrd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HRNav from "./Components/NavBars/hrNav";
import HODNav from "./Components/NavBars/hodNav";

ReactDOM.render(
  <Router>
    <HODNav />
    <Route path="/login" exact component={Login} />
    <Route path="/" exact component={ViewMyProfile} />
    <Route path="/resetPassword" exact component={ResetPassowrd} />
  </Router>,

  document.getElementById("root")
);
