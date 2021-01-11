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
import  ButtonsPageHod from "./Components/List Views HOD/buttonsPageHod";
import viewAllReq from './Components/Pages/Academic Members/HOD/viewAllReq'
import viewTeachingAssignments from './Components/Pages/Academic Members/HOD/viewTeachingAssignments'
import ViewDayOffAll from "./Components/Pages/Academic Members/HOD/viewDayOffAll";
import ViewDayOffX from "./Components/Pages/Academic Members/HOD/viewDayOffX";
import acceptRejectReq from "./Components/Pages/Academic Members/HOD/acceptRejectReq";
import ViewCoverageHOD from "./Components/Pages/Academic Members/HOD/viewCoverageHOD";

ReactDOM.render(
  <Router>
   <HODNav/>
    <Route path="/login" exact component={Login} />

    <Route path="/login/CI/viewCoverage" exact component={viewCoverage} />
    <Route path="/login/CI/viewSlotsAssignment" exact component={viewSlotsAssignment} />
    <Route path="/login/CI/viewAllStaff" exact component={viewAllStaff} />
    <Route path="/login/CI/buttonsPage" exact component={buttonsPage} />

    <Route path="/login/coursesListView" exact component={CoursesListView} />
    <Route path="/buttonsPageHod" exact component={ButtonsPageHod} />
    <Route path="/viewStaffPerCourse" exact component={InstructorsListViewPerCourse} />
    <Route path="/viewStaffPerDep" exact component={InstructorsListViewPerDep} />
    <Route path="/viewAllReq" exact component={viewAllReq} />
    <Route path="/viewTeachingAssignments" exact component={viewTeachingAssignments} />
    <Route path="/viewDayOffAll" exact component={ViewDayOffAll} />
    <Route path="/viewDayOffX" exact component={ViewDayOffX} />
    <Route path="/acceptReject" exact component={acceptRejectReq} />
    <Route path="/viewCoverageHOD" exact component={ViewCoverageHOD} />
  </Router>,

  document.getElementById("root")
);