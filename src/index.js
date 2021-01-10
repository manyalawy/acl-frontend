  
import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Pages/Staff Members/Login/Login";
//import ViewMyProfile from "./Components/Pages/Staff Members/View_my_profile/ViewMyProfile";
//import ResetPassowrd from "./Components/Pages/Staff Members/Reset password/ResetPassowrd";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import HRNav from "./Components/NavBars/hrNav";
import HODNav from "./Components/NavBars/hodNav";
import courseInstructorFP from "./Components/Pages/Academic Members/Course Instructor/courseInstructorFP";
import viewSlotsAssignment from "./Components/Pages/Academic Members/Course Instructor/viewSlots";
import viewCoverage from "./Components/Pages/Academic Members/Course Instructor/viewCoverage";
import viewAllStaff from "./Components/Pages/Academic Members/Course Instructor/viewAllStaff";

ReactDOM.render(
  <Router>
    <HODNav />
    <Route path="/login" exact component={Login} />
    <Route path="/login/CI" exact component={courseInstructorFP} />
    <Route path="/login/CI/viewCoverage" exact component={viewCoverage} />
    <Route path="/login/CI/viewSlotsAssignment" exact component={viewSlotsAssignment} />
    <Route path="/login/CI/viewAllStaff" exact component={viewAllStaff} />
  
  </Router>,

  document.getElementById("root")
);