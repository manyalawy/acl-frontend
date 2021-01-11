import React from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router'

const CINav = () => {
  const history = useHistory()
  const ViewCov = () =>{
  history.push("/login/CI/viewCoverage")
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
           <Nav.Link href="#features"
           onClick={ViewCov}>View Courses Coverage</Nav.Link>
           <Nav.Link href="#features"
           onClick={viewSlots}>View Slots Assignments</Nav.Link>  
           <Nav.Link href="#features"
           onClick={viewAllStaffPerCourse}>View All Staff</Nav.Link>
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
