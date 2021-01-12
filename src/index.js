import React from "react"
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Components/Pages/Staff Members/Login/Login";
import ViewMyProfile from "./Components/Pages/Staff Members/View_my_profile/ViewMyProfile";
import ResetPassowrd from "./Components/Pages/Staff Members/Reset password/ResetPassowrd";

import HRNav from "./Components/NavBars/hrNav";
import CINav from "./Components/NavBars/ciNav";
import HODNav from "./Components/NavBars/hodNav";

import viewSlotsAssignment from "./Components/Pages/Academic Members/Course Instructor/viewSlots";
import viewCoverage from "./Components/Pages/Academic Members/Course Instructor/viewCoverage";
import viewAllStaff from "./Components/Pages/Academic Members/Course Instructor/viewAllStaff";
import buttonsPage from "./Components/Pages/Academic Members/Course Instructor/buttonsPage";
import coursesCI from "./Components/Pages/Academic Members/Course Instructor/coursesCI";

import CoursesListView from "./Components/List Views HOD/coursesListView";
import InstructorsListViewPerDep from "./Components/List Views HOD/InstructorsListViewPerDep";
import  ButtonsPageHod from "./Components/List Views HOD/buttonsPageHod";
import InstructorsListViewPerCourse from './Components/List Views HOD/InstructorsListViewPerCourse'
import ButtonsPageHod2 from "./Components/List Views HOD/buttonsPageHOD2";
import viewAllReq from './Components/Pages/Academic Members/HOD/viewAllReq'
import viewTeachingAssignments from './Components/Pages/Academic Members/HOD/viewTeachingAssignments'
import ViewDayOffAll from "./Components/Pages/Academic Members/HOD/viewDayOffAll";
import ViewDayOffX from "./Components/Pages/Academic Members/HOD/viewDayOffX";
import acceptRejectReq from "./Components/Pages/Academic Members/HOD/acceptRejectReq";
import ViewCoverageHOD from "./Components/Pages/Academic Members/HOD/viewCoverageHOD";
import ViewAttendance from "./Components/Pages/Staff Members/View Attendance/ViewAttendance";
import ViewAttendanceRecord from './Components/Pages/HR Members/viewAttendanceRecord'

import CompensationLeave from './Components/Pages/Academic Members/Academic Member/Leave System/CompensationLeave'
import AccidentialLeave from './Components/Pages/Academic Members/Academic Member/Leave System/AccidentialLeave'
import AnnualLeave from './Components/Pages/Academic Members/Academic Member/Leave System/AnnualLeave'
import MaternityLeave from './Components/Pages/Academic Members/Academic Member/Leave System/MaternityLeave'
import SickLeave from './Components/Pages/Academic Members/Academic Member/Leave System/SickLeave'
import viewAll from './Components/Pages/Academic Members/Academic Member/Requests Status/ViewAll'
import viewAccepted from './Components/Pages/Academic Members/Academic Member/Requests Status/ViewAccepted'
import ViewPending from './Components/Pages/Academic Members/Academic Member/Requests Status/ViewPending'
import viewRejected from './Components/Pages/Academic Members/Academic Member/Requests Status/ViewRejected'
import ViewSchedule from "./Components/Pages/Academic Members/Academic Member/ViewSchedule";
import SendReplacementReq from "./Components/Pages/Academic Members/Academic Member/SendReplacementReq";
import viewReplacementReq from "./Components/Pages/Academic Members/Academic Member/ViewReplacementReq";
import slotLinkingReq from "./Components/Pages/Academic Members/Academic Member/SlotLinkingReq";
import changeDayOff from "./Components/Pages/Academic Members/Academic Member/ChangeDayOff";
import isAuth from "./Services/isAuth";
import { SlotLinkingRequests } from "./Components/Pages/Academic Members/Course Coordinator/SlotLinkingRequests";
import { CourseSlots } from "./Components/Pages/Academic Members/Course Coordinator/CourseSlots";
import StaffAttendance from "./Components/Pages/HR Members/View Staff Member Attendance/StaffAttendance";
ReactDOM.render(
  <Router>
   <HODNav/>
    <Route path="/login" exact component={Login} />
    <Route path="/" exact component={ViewMyProfile} />
    <Route path="/resetPassword" exact component={ResetPassowrd} />
    <Route path="/attendance" exact component={ViewAttendance} />
    <Route path="/courseSlots" exact component={CourseSlots} />
    <Route path="/slotLinkingRequests" exact component={SlotLinkingRequests} />
    <Route path="/staffAttendance" exac component={StaffAttendance} />
    <Route path="/login/CI/viewCoverage" exact component={viewCoverage} />
    <Route path="/login/CI/viewSlotsAssignment" exact component={viewSlotsAssignment} />
    <Route path="/login/CI/viewAllStaff" exact component={viewAllStaff} />
    <Route path="/login/CI/buttonsPage" exact component={buttonsPage} />
    <Route path="/login/CI/coursesCI" exact component={coursesCI} />

    <Route path="/coursesListView" exact component={CoursesListView} />
    <Route path="/buttonsPageHod" exact component={ButtonsPageHod} />
  
    <Route path="/InstructorsListViewPerDep" exact component={InstructorsListViewPerDep} />
    <Route path="/viewAllReq" exact component={viewAllReq} />
    <Route path="/viewTeachingAssignments" exact component={viewTeachingAssignments} />
    <Route path="/viewDayOffAll" exact component={ViewDayOffAll} />
    <Route path="/viewDayOffX" exact component={ViewDayOffX} />
    <Route path="/acceptReject" exact component={acceptRejectReq} />
    <Route path="/viewCoverageHOD" exact component={ViewCoverageHOD} />

    <Route path="/viewAttendanceRecord" exact component={ViewAttendanceRecord} />
    <Route path="/InstructorsListViewPerCourse" exact component={InstructorsListViewPerCourse} />
    <Route path="/buttonsPageHod2" exact component={ButtonsPageHod2} />
    <Route path="/compensationLeave" exact component={CompensationLeave} />
    <Route path="/accidentialLeave" exact component={AccidentialLeave} />
    <Route path="/annualLeave" exact component={AnnualLeave} />
    <Route path="/maternityLeave" exact component={MaternityLeave} />
    <Route path="/sickLeave" exact component={SickLeave} />
    <Route path="/viewAll" exact component={viewAll} />
    <Route path="/viewAccepted" exact component={viewAccepted} />
    <Route path="/viewPending" exact component={ViewPending} />
    <Route path="/viewRejected" exact component={viewRejected} />
    <Route path="/sendReplacementReq" exact component={SendReplacementReq} />
    <Route path="/viewReplacementReq" exact component={viewReplacementReq} />
    <Route path="/slotLinkingReq" exact component={slotLinkingReq} />
    <Route path="/viewSchedule" exact component={ViewSchedule} />
    <Route path="/changeDayOff" exact component={changeDayOff} />
  </Router>,

  document.getElementById("root")
);