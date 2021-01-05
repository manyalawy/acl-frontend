import React from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HODNav = () => {
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
            <NavDropdown.Item href="#action/3.1">
              Course instructors
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">View staff</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Requests" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              View change day of/leave requests
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Change day off request
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              View my requests
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Courses" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              View course coverage
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
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