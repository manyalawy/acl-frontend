import React from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HRNav = () => {
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
          <NavDropdown title="Academics" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Locations</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Faculties</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Departments</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Courses</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Staff members" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              View staff members
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Staff members attendance
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Update salary
            </NavDropdown.Item>
          </NavDropdown>
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
export default HRNav;
