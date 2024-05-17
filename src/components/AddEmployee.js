import React, { useState } from "react";
import "./AddEmployee.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTaskToList } from "../slice/taskSlice";

const AddEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [doj, setDoj] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fname, lname, email, doj, role, salary);
    dispatch(addTaskToList({ fname, lname, email, doj, role, salary }));
    navigate("/employeeList");
  };
  return (
    <div className="containerAddEmp">
      <div>
        <h2>ADD EMPLOYEE</h2>
        <Link to="/dashboard" className="addEmpList">
          Dashboard
        </Link>

        <form className="formContainer" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label for="fname">First Name</label>
            <input
              name="fname"
              type="text"
              required
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label for="lname">Last Name</label>
            <input
              name="lname"
              type="text"
              required
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label for="doj">Date of Joining</label>
            <input
              name="doj"
              type="date"
              required
              value={doj}
              onChange={(e) => setDoj(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label for="salary">salary</label>
            <input
              name="salary"
              type="number"
              required
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label for="mail">Email</label>
            <input
              name="mail"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label for="role">Role</label>
            <input
              name="role"
              type="text"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <button type="submit" className="addEmpBtn" required>
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
