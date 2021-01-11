import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Pages/Staff Members/Login/Login";
//import ViewMyProfile from "./Components/Pages/Staff Members/View_my_profile/ViewMyProfile";
//import ResetPassowrd from "./Components/Pages/Staff Members/Reset password/ResetPassowrd";
//import HRNav from "./Components/NavBars/hrNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewMyProfile from "./Components/Pages/Staff Members/View_my_profile/ViewMyProfile";
import ResetPassowrd from "./Components/Pages/Staff Members/Reset password/ResetPassowrd";
import ViewAttendance from "./Components/Pages/Staff Members/View Attendance/ViewAttendance";
import courseInstructorFP from "./Components/Pages/Academic Members/Course Instructor/courseInstructorFP";
import viewSlotsAssignment from "./Components/Pages/Academic Members/Course Instructor/viewSlots";
import viewCoverage from "./Components/Pages/Academic Members/Course Instructor/viewCoverage";
import viewAllStaff from "./Components/Pages/Academic Members/Course Instructor/viewAllStaff";
import buttonsPage from "./Components/Pages/Academic Members/Course Instructor/buttonsPage";
import CoursesListView from "./Components/List Views/coursesListView";
import InstructorsListViewPerCourse from "./Components/List Views/InstructorsListViewPerCourse";
import InstructorsListViewPerDep from "./Components/List Views/InstructorsListViewPerCourse";
import CINav from "./Components/NavBars/ciNav";
import pageCall from "./Components/List Views/pageCall";

if (isAuth()) {
ReactDOM.render(
  <Router>
   <CINav/>
   
    <Route path="/login" exact component={Login} />
      <Route path="/" exact component={ViewMyProfile} />
      <Route path="/resetPassword" exact component={ResetPassowrd} />
      <Route path="/attendance" exact component={ViewAttendance} />
      <Route path="/courseSlots" exact component={CourseSlots} />
      <Route path="/login" exact component={Login} />
      <Route path="/login/CI" exact component={courseInstructorFP} />
      <Route path="/login/CI/viewCoverage" exact component={viewCoverage} />
      <Route path="/login/CI/viewSlotsAssignment" exact component={viewSlotsAssignment} />
      <Route path="/login/CI/viewAllStaff" exact component={viewAllStaff} />
      <Route path="/login/coursesListView" exact component={CoursesListView} />
      <Route path="/login/InstructorsListView" exact component={InstructorsListView} />
      <Route path="/slotLinkingRequests"  exact component={SlotLinkingRequests}/>
     <Route path="/login/CI/viewCoverage" exact component={viewCoverage} />
    <Route path="/login/CI/viewSlotsAssignment" exact component={viewSlotsAssignment} />
    <Route path="/login/CI/viewAllStaff" exact component={viewAllStaff} />
    <Route path="/login/CI/buttonsPage" exact component={buttonsPage} />
    <Route path="/login/coursesListView" exact component={CoursesListView} />
    <Route path="/login/pageCall" exact component={pageCall} />
    <Route path="/login/InstructorsListViewPerCourse" exact component={InstructorsListViewPerCourse} />
    <Route path="/login/InstructorsListViewPerDep" exact component={InstructorsListViewPerDep} />
  </Router>,
  );
}
  else {
  ReactDOM.render(
    <Router>
      <Route path="/login" exact component={Login} />
    </Router>,

    document.getElementById("root")
  );
}




