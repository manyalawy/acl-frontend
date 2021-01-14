import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Pages/Staff Members/Login/Login";
import ViewMyProfile from "./Components/Pages/Staff Members/View_my_profile/ViewMyProfile";
import ResetPassowrd from "./Components/Pages/Staff Members/Reset password/ResetPassowrd";
import ViewAttendance from "./Components/Pages/Staff Members/View Attendance/ViewAttendance";
import AddLocation from "./Components/Pages/HR Members/AddLocation";
import DeleteLocation from "./Components/Pages/HR Members/DeleteLocation";
import UpdateLocation from "./Components/Pages/HR Members/UpdateLocation";
import AddFaculty from "./Components/Pages/HR Members/AddFaculty";
import UpdateFaculty from "./Components/Pages/HR Members/UpdateFaculty";
import DeleteFaculty from "./Components/Pages/HR Members/DeleteFaculty";
import AddDepartment from "./Components/Pages/HR Members/AddDepartment";
import UpdateDepartment from "./Components/Pages/HR Members/UpdateDepartment";
import DeleteDepartment from "./Components/Pages/HR Members/DeleteDepartment";
import UpdateCourse from "./Components/Pages/HR Members/Update Course";
import AddCourse from "./Components/Pages/HR Members/AddCourse";
import DeleteCourse from "./Components/Pages/HR Members/DeleteCourse";
import AddStaff from "./Components/Pages/HR Members/AddUser";
import DeleteStaff from "./Components/Pages/HR Members/DeleteUser";
import UpdateStaff from "./Components/Pages/HR Members/UpdateUser";
import StaffAttendance from "./Components/Pages/HR Members/StaffAttendance";
import UpdateSalary from "./Components/Pages/HR Members/UpdateSalary";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HRNav from "./Components/NavBars/hrNav";
import HODNav from "./Components/NavBars/hodNav";
import ProtectedRoute from "./Services/ProtectedRoute";

ReactDOM.render(
  <Router>
    <HRNav />
    {/* Staff members routes */}
    <Route path="/login" exact component={Login} />
    <ProtectedRoute path="/" exact component={ViewMyProfile} />
    <ProtectedRoute path="/resetPassword" exact component={ResetPassowrd} />
    <ProtectedRoute path="/attendance" exact component={ViewAttendance} />

    {/* HR members */}
    <ProtectedRoute path="/addLocation" exact component={AddLocation} />
    <ProtectedRoute path="/deleteLocation" exact component={DeleteLocation} />
    <ProtectedRoute path="/updateLocation" exact component={UpdateLocation} />
    <ProtectedRoute path="/addFac" exact component={AddFaculty} />
    <ProtectedRoute path="/updateFac" exact component={UpdateFaculty} />
    <ProtectedRoute path="/deleteFac" exact component={DeleteFaculty} />
    <ProtectedRoute path="/addDep" exact component={AddDepartment} />
    <ProtectedRoute path="/updateDep" exact component={UpdateDepartment} />
    <ProtectedRoute path="/deleteDep" exact component={DeleteDepartment} />
    <ProtectedRoute path="/addCourse" exact component={AddCourse} />
    <ProtectedRoute path="/updateCourse" exact component={UpdateCourse} />
    <ProtectedRoute path="/deleteCourse" exact component={DeleteCourse} />
    <ProtectedRoute path="/addStaff" exact component={AddStaff} />
    <ProtectedRoute path="/updateStaff" exact component={UpdateStaff} />
    <ProtectedRoute path="/deleteStaff" exact component={DeleteStaff} />
    <ProtectedRoute path="/staffAttendance" exact component={StaffAttendance} />
    <ProtectedRoute path="/updateSalary" exact component={UpdateSalary} />
  </Router>,

  document.getElementById("root")
);
