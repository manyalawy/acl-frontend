import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Pages/Staff Members/Login/Login";
import ViewMyProfile from "./Components/Pages/Staff Members/View_my_profile/ViewMyProfile";
import ResetPassowrd from "./Components/Pages/Staff Members/Reset password/ResetPassowrd";
import ViewAttendance from "./Components/Pages/Staff Members/View Attendance/ViewAttendance";
import isAuth from "./Services/isAuth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HRNav from "./Components/NavBars/hrNav";
import HODNav from "./Components/NavBars/hodNav";
import { SlotLinkingRequests } from "./Components/Pages/Academic Members/Course Coordinator/SlotLinkingRequests";
import { CourseSlots } from "./Components/Pages/Academic Members/Course Coordinator/CourseSlots";

if (isAuth()) {
  ReactDOM.render(
    <Router>
      <HODNav />
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={ViewMyProfile} />
      <Route path="/resetPassword" exact component={ResetPassowrd} />
      <Route path="/attendance" exact component={ViewAttendance} />
      <Route path="/courseSlots" exact component={CourseSlots} />
      <Route
        path="/slotLinkingRequests"
        exact
        component={SlotLinkingRequests}
      />
    </Router>,

    document.getElementById("root")
  );
} else {
  ReactDOM.render(
    <Router>
      <Route path="/login" exact component={Login} />
    </Router>,

    document.getElementById("root")
  );
}
