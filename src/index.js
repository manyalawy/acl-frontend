import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Pages/Staff Members/Login/Login";
import ViewMyProfile from "./Components/Pages/Staff Members/View_my_profile/ViewMyProfile";
import ResetPassowrd from "./Components/Pages/Staff Members/Reset password/ResetPassowrd";
import ViewAttendance from "./Components/Pages/Staff Members/View Attendance/ViewAttendance";
// import courseInstructorFP from "./Components/Pages/Academic Members/Course Instructor/courseInstructorFP";
// import viewSlotsAssignment from "./Components/Pages/Academic Members/Course Instructor/viewSlots";
import viewCoverage from "./Components/Pages/Academic Members/Course Instructor/viewCoverage";
import viewAllStaff from "./Components/Pages/Academic Members/Course Instructor/viewAllStaff";
import CoursesListView from "./Components/List Views HOD/coursesListView";
// import InstructorsListView from "./Components/List Views/InstructorsListViewPerCourse";
import isAuth from "./Services/isAuth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HRNav from "./Components/NavBars/hrNav";
import HODNav from "./Components/NavBars/hodNav";
import { SlotLinkingRequests } from "./Components/Pages/Academic Members/Course Coordinator/SlotLinkingRequests";
import { CourseSlots } from "./Components/Pages/Academic Members/Course Coordinator/CourseSlots";
import SendDayOffRequest from "./Components/Pages/Academic Members/Academic Member/Change Day Off Request/ChangeDayOff";
import StaffAttendance from "./Components/Pages/HR Members/View Staff Member Attendance/StaffAttendance";
import ProtectedRoute from "./Services/ProtectedRoute";
import UpdateUser from "./Components/Pages/HR Members/View Staff Member Attendance/UpdateUser";
// import UpdateDepartment from "./Components/Pages/HR Members/View Staff Member Attendance/UpdateDepartment";

ReactDOM.render(
  <Router>
    <HODNav />
    <Route path="/login" exact component={Login} />
    <ProtectedRoute path="/changeDayOff" exact component={SendDayOffRequest} />
    {/* <ProtectedRoute path="/updatedep" exact component={UpdateDepartment} /> */}
    <ProtectedRoute path="/" exact component={ViewMyProfile} />
    <ProtectedRoute path="/resetPassword" exact component={ResetPassowrd} />
    <ProtectedRoute path="/attendance" exact component={ViewAttendance} />
    <ProtectedRoute path="/courseSlots" exact component={CourseSlots} />
    <ProtectedRoute path="/update/user" exact component={UpdateUser} />
    <ProtectedRoute
      path="/login/CI/viewAllStaff"
      exact
      component={viewAllStaff}
    />
    <ProtectedRoute
      path="/login/coursesListView"
      exact
      component={CoursesListView}
    />
    <ProtectedRoute
      path="/slotLinkingRequests"
      exact
      component={SlotLinkingRequests}
    />
    <ProtectedRoute path="/staffAttendance" exact component={StaffAttendance} />
  </Router>,

  document.getElementById("root")
);
