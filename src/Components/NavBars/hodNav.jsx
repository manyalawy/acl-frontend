import React from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useHistory} from 'react-router'

const HODNav = () => {
  const history = useHistory()
  const viewDep = () =>{
    history.push('/viewStaffPerDep')
  }
  const viewC = () =>{
    history.push('/viewStaffPerCourse')
  }
  const viewRequests= () =>{
    history.push('/viewAllReq')
  }
  const viewCov= () =>{
    history.push('/viewCoverageHOD')
  }
  const viewTA= () =>{
    history.push('/viewTeachingAssignments')
  }

 
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Profile" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">View profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Update profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Attendance</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Reset password
            </NavDropdown.Item>
    
          </NavDropdown>
          <NavDropdown title="Staff" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"
            onClick={viewC}>
             view staff per course
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"
            onClick={viewDep}>view staff per department</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Requests" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.2"
            onClick={viewRequests}>
              View All requests
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Courses" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"
            onClick={viewCov}>
              View course coverage
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"
            onClick={viewTA}>
              View teaching assigments
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#features">View schedule</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            <Button variant="danger">Logout</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default HODNav;
