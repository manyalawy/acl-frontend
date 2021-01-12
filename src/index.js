// eslint-disable-next-line
import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Pages/Staff Members/Login/Login";
import ViewMyProfile from "./Components/Pages/Staff Members/View_my_profile/ViewMyProfile";
import ResetPassowrd from "./Components/Pages/Staff Members/Reset password/ResetPassowrd";
import ViewAttendance from "./Components/Pages/Staff Members/View Attendance/ViewAttendance";
import courseInstructorFP from "./Components/Pages/Academic Members/Course Instructor/courseInstructorFP";
import viewSlotsAssignment from "./Components/Pages/Academic Members/Course Instructor/viewSlots";
import viewCoverage from "./Components/Pages/Academic Members/Course Instructor/viewCoverage";
import viewAllStaff from "./Components/Pages/Academic Members/Course Instructor/viewAllStaff";
import CoursesListView from "./Components/List Views/coursesListView";
import InstructorsListView from "./Components/List Views/InstructorsListViewPerCourse";
// eslint-disable-next-line
import isAuth from "./Services/isAuth";
import { BrowserRouter as Router, Route } from "react-router-dom";
// eslint-disable-next-line
import HRNav from "./Components/NavBars/hrNav";
import HODNav from "./Components/NavBars/hodNav";
import { SlotLinkingRequests } from "./Components/Pages/Academic Members/Course Coordinator/SlotLinkingRequests";
import { CourseSlots } from "./Components/Pages/Academic Members/Course Coordinator/CourseSlots";
import SendDayOffRequest from "./Components/Pages/Academic Members/Academic Member/Change Day Off Request/ChangeDayOff";
import StaffAttendance from "./Components/Pages/HR Members/View Staff Member Attendance/StaffAttendance";

ReactDOM.render(
  <Router>
    <HODNav />
    <Route path="/login" exact component={Login} />
    <Route path="/changeDayOff" exact component={SendDayOffRequest} />
    <Route path="/" exact component={ViewMyProfile} />
    <Route path="/resetPassword" exact component={ResetPassowrd} />
    <Route path="/attendance" exact component={ViewAttendance} />
    <Route path="/courseSlots" exact component={CourseSlots} />
    <Route path="/login/CI" exact component={courseInstructorFP} />
    <Route path="/login/CI/viewCoverage" exact component={viewCoverage} />
    <Route
      path="/login/CI/viewSlotsAssignment"
      exact
      component={viewSlotsAssignment}
    />
    <Route path="/login/CI/viewAllStaff" exact component={viewAllStaff} />
    <Route path="/login/coursesListView" exact component={CoursesListView} />
    <Route
      path="/login/InstructorsListView"
      exact
      component={InstructorsListView}
    />
    <Route path="/slotLinkingRequests" exact component={SlotLinkingRequests} />
    <Route path="/staffAttendance" exac component={StaffAttendance} />
  </Router>,

  document.getElementById("root")
);
