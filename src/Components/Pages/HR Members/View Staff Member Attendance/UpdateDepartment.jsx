import React, { useState, useEffect } from "react";
import jwt_decoded from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Alert,
  Form,
  Container,
  Dropdown,
  StyleSheet,
  ButtonGroup,
} from "react-bootstrap";
const token = localStorage.getItem("user");
const decoded = jwt_decoded(token);

const axios = require("axios").default;
const UpdateDepartment = () => {
  const [name, setname] = useState("");
  const [newname, setnew] = useState("");
  const [Faculty, setFaculty] = useState("");
  const [hod, sethod] = useState("");
  const handle_update = () => {
    axios
      .post(
        "http://localhost:8080/hrMember/UpdateDepartment",
        {
          name: name,
          newname: newname,
          Faculty: Faculty,
          hod: hod,
        },
        { headers: { token: token } }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert(response.data.msg);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        alert(error.response.data.error);
      });
  };

  return (
    <div>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Department Name</Form.Label>
            <Form.Control
              placeholder="@MET"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              Enter the faculty name need to be updated
            </Form.Text>
          </Form.Group>
        </Form>

        <Form>
          <Form.Group>
            <Form.Label>New Department Name</Form.Label>
            <Form.Control
              placeholder="@MET"
              value={newname}
              onChange={(e) => {
                setnew(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              Enter the new department name , Leave it empty in case no need for
              modification
            </Form.Text>
          </Form.Group>
        </Form>

        <Form>
          <Form.Group>
            <Form.Label>Faculty</Form.Label>
            <Form.Control
              placeholder="@Engineering"
              value={Faculty}
              onChange={(e) => {
                setFaculty(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              Enter a new Faculty , Leave it empty in case no need for
              modification
            </Form.Text>
          </Form.Group>
        </Form>

        <Form>
          <Form.Group>
            <Form.Label>Head Of Department ID</Form.Label>
            <Form.Control
              placeholder="@ac-4"
              value={hod}
              onChange={(e) => {
                sethod(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              Enter the new head of department ID that will be assigned to this
              department , Leave it empty in case no need for modification
            </Form.Text>
          </Form.Group>
        </Form>

        <Button variant="danger" onClick={handle_update}>
          Update
        </Button>
      </Container>
    </div>
  );
};
export default UpdateDepartment;
