import React from "react";
import "./dashboard.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const location = useLocation();
  const loginUser = location.state?.loginUser;
  const { empList } = useSelector((state) => state.tasks);
  return (
    <>
      <div className="dashPg">
        <div className="navBar">
          <nav>
            <ul className="DashNavUl">
              <li>
                <Link to="/addEmployee" className="dashNav">
                  Add Employee
                </Link>
              </li>
              <li>
                <Link to="/employeeList" className="dashNav">
                  Employee List
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="dash-container">
          <h1>Welcome {loginUser ? loginUser : "Employee"} ! </h1>
          <div className="workerNo">
            <h2>Workers </h2>
            <p>
              <img src="employee.svg" className="employeeImg" />
              {empList.length}
            </p>
          </div>
          <div className="dashImgCnt">
            <img src="research.svg" className="dashImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
