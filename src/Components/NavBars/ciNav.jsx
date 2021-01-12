import React from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router'

const CINav = () => {
  const history = useHistory()
  const ViewCov = () =>{
  history.push("/login/CI/coursesCI")
}
  const viewSlots = () =>{
  history.push("/login/CI/viewSlotsAssignment")
}
  const viewAllStaffPerCourse = () =>{
  history.push("/login/CI/viewAllStaff")
}
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto">

        <NavDropdown title="Profile" id="collasible-nav-dropdown">
            <NavDropdown.Item >View Profile</NavDropdown.Item>
            <NavDropdown.Item >
              Update Profile
            </NavDropdown.Item>
            <NavDropdown.Item>Attendance</NavDropdown.Item>
            <NavDropdown.Item>
              Reset password
            </NavDropdown.Item>
    
          </NavDropdown>
          
           <NavDropdown title="Staff" id="collasible-nav-dropdown">
            <NavDropdown.Item 
            onClick={viewAllStaffPerCourse}>View All Staff</NavDropdown.Item>
            
          </NavDropdown>
           <Nav.Link 
           onClick={ViewCov}>View Courses Coverage</Nav.Link>
           <Nav.Link 
           onClick={viewSlots}>View Slots Assignments</Nav.Link>  
          

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
export default CINav;
