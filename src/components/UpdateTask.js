import React, { useEffect, useState } from "react";
import "./AddEmployee.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { updateEmpList } from "../slice/taskSlice";
import { useDispatch, useSelector } from "react-redux";

const UpdateTask = (props) => {
  const { selectedEmp } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [doj, setDoj] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    setFname(selectedEmp.fname);
    setLname(selectedEmp.lname);
    setEmail(selectedEmp.email);
    setDoj(selectedEmp.doj);
    setRole(selectedEmp.role);
    setSalary(selectedEmp.salary);
    setId(selectedEmp.id);
  }, [selectedEmp]);

  const UpdateTable = () => {
    props.onHide();
    dispatch(updateEmpList({ fname, lname, email, doj, role, salary, id }));
  };
  // const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="updateTableContainer">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Employee List
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="model-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date of Joining</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date of Joining"
                value={doj}
                onChange={(e) => setDoj(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="number"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={(e) => UpdateTable(e)}>Update Employee</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateTask;
