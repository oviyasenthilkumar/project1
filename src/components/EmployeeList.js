import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./EmployeeList.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedEmp, removeFromList } from "../slice/taskSlice";

import UpdateTask from "./UpdateTask";

const EmployeeList = () => {
  const dispatch = useDispatch();

  const { empList } = useSelector((state) => state.tasks);
  const [modalShow, setModalShow] = React.useState(false);

  const [search, setSearch] = useState("");

  const editValue = (task) => {
    setModalShow(true);
    dispatch(setSelectedEmp(task));
  };
  const deleteValue = (task) => {
    dispatch(removeFromList(task));
  };
  return (
    <div className="empContainer">
      <div>
        <h2>Employee List</h2>
      </div>
      <div>
        <Link to="/addEmployee" className="addEmpList1">
          Add Employee
        </Link>
        <Link to="/dashboard" className="addEmpList2">
          Dashboard /
        </Link>
      </div>
      <div>
        <form>
          <input
            type="text"
            placeholder="search Employee"
            onChange={(e) => setSearch(e.target.value)}
            className="searchInput"
          />
        </form>
      </div>
      <div>
        <table className="tableList">
          <thead>
            <th>sno</th>
            <th>Name</th>
            <th>Email</th>
            <th>DOJ</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Update</th>
          </thead>
          <tbody>
            {empList &&
              empList
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.fname.toLowerCase().includes(search);
                })
                .map((form, index) => (
                  <tr key={form.id} className="rows">
                    <td>{index + 1}</td>
                    <td>
                      {form.fname} {form.lname}
                    </td>
                    <td>{form.email}</td>
                    <td>{form.doj}</td>
                    <td>{form.role}</td>
                    <td>{form.salary}</td>
                    <td>
                      <button className="updateBtn" onClick={() => editValue(form)}>Edit</button>
                      <button className="updateBtn" onClick={() => deleteValue(form)}> Delete </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <UpdateTask show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default EmployeeList;
