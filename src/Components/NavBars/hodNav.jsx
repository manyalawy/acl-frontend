import React from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useHistory} from 'react-router'

const HODNav = () => {
  const history = useHistory()
  const viewDep = () =>{
    history.push('/InstructorsListViewPerDep')
  }
  const viewRequests= () =>{
    history.push('/viewAllReq')
  }
  const viewTA= () =>{
    history.push('/viewTeachingAssignments')
  }
  const viewCourses= () =>{
    history.push('/coursesListView')
  }
  const viewDayOff = () =>{
    history.push('/viewDayOffAll')
  }

 
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Profile" id="collasible-nav-dropdown">
            <NavDropdown.Item>View profile</NavDropdown.Item>
            <NavDropdown.Item>
              Update profile
            </NavDropdown.Item>
            <NavDropdown.Item>Attendance</NavDropdown.Item>
            <NavDropdown.Item >
              Reset password
            </NavDropdown.Item>
    
          </NavDropdown>
          <NavDropdown title="Staff" id="collasible-nav-dropdown">
            <NavDropdown.Item 
            onClick={viewCourses}>
             View Staff Per Course
            </NavDropdown.Item>
            <NavDropdown.Item
            onClick={viewDep}>View Staff Per Department</NavDropdown.Item>
              <NavDropdown.Item
            onClick={viewDayOff}>View Day Off All
            </NavDropdown.Item>
          </NavDropdown>
      
          <NavDropdown title="Courses" id="collasible-nav-dropdown">
          <NavDropdown.Item 
            onClick={viewCourses}>
              View All Courses
            </NavDropdown.Item>
            <NavDropdown.Item 
            onClick={viewTA}>
              View Teaching Assigments
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Requests" id="collasible-nav-dropdown">
            <NavDropdown.Item 
            onClick={viewRequests}>
              View All Requests
            </NavDropdown.Item>
            <NavDropdown.Item 
            >
              Replacement Requests
            </NavDropdown.Item>
            <NavDropdown.Item>
              Slot Linking Requests
            </NavDropdown.Item>
            <NavDropdown.Item>
            Change Day Off
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Leave System" id="collasible-nav-dropdown">
            <NavDropdown.Item 
            >
             Annual Leave
            </NavDropdown.Item>
            <NavDropdown.Item
          >Accidential Leave</NavDropdown.Item>
              <NavDropdown.Item
            >Sick Leave
            </NavDropdown.Item>
            <NavDropdown.Item
            >Maternity Leave
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Requests Status" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              View All 
            </NavDropdown.Item>
            <NavDropdown.Item>
              View Accepted Requests
            </NavDropdown.Item>
            <NavDropdown.Item>
              View Pending Requests
            </NavDropdown.Item>
            <NavDropdown.Item>
              View Rejected Requests
            </NavDropdown.Item>
          </NavDropdown>
         
      
          <Nav.Link >View schedule</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link >
            <Button variant="danger">Logout</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default HODNav;
