import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Pages/Staff Members/Login/Login";
//import ViewMyProfile from "./Components/Pages/Staff Members/View_my_profile/ViewMyProfile";
//import ResetPassowrd from "./Components/Pages/Staff Members/Reset password/ResetPassowrd";
//import HRNav from "./Components/NavBars/hrNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import viewSlotsAssignment from "./Components/Pages/Academic Members/Course Instructor/viewSlots";
import viewCoverage from "./Components/Pages/Academic Members/Course Instructor/viewCoverage";
import viewAllStaff from "./Components/Pages/Academic Members/Course Instructor/viewAllStaff";
import buttonsPage from "./Components/Pages/Academic Members/Course Instructor/buttonsPage";
import CoursesListView from "./Components/List Views HOD/coursesListView";
import InstructorsListViewPerCourse from "./Components/List Views HOD/InstructorsListViewPerCourse";
import InstructorsListViewPerDep from "./Components/List Views HOD/InstructorsListViewPerCourse";
import CINav from "./Components/NavBars/ciNav";
import HODNav from "./Components/NavBars/hodNav";
import pageCall from "./Components/List Views HOD/pageCall";

ReactDOM.render(
  <Router>
   <HODNav/>
    <Route path="/login" exact component={Login} />

    <Route path="/login/CI/viewCoverage" exact component={viewCoverage} />
    <Route path="/login/CI/viewSlotsAssignment" exact component={viewSlotsAssignment} />
    <Route path="/login/CI/viewAllStaff" exact component={viewAllStaff} />
    <Route path="/login/CI/buttonsPage" exact component={buttonsPage} />

    <Route path="/login/coursesListView" exact component={CoursesListView} />
    <Route path="/login/pageCall" exact component={pageCall} />
    <Route path="/login/InstructorsListViewPerCourse" exact component={InstructorsListViewPerCourse} />
    <Route path="/login/InstructorsListViewPerDep" exact component={InstructorsListViewPerDep} />
  </Router>,

  document.getElementById("root")
);