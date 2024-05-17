import Login from "./components/Login";

import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import UpdateTask from "./components/UpdateTask";



function App() {

  let employees = [
    {
      fname: "Jhon",
      lname: "Francis",
      id: "123",
      salary: 50000,
      doj: "05/23/2021",
      mail: "raj12@gmail.com",
    },
    {
      fname: "anu",
      lname: "priya",
      id: "133",
      salary: 58000,
      doj: "12/03/2023",
      mail: "anupriya@gmail.com",
    },
    {
      fname: "Vijay",
      lname: "Sam",
      id: "133",
      salary: 58000,
      doj: "12/03/2023",
      mail: "anupriya@gmail.com",
    } 
  ]
  return (
   
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="addEmployee" element={<AddEmployee/>}/>
      <Route path="employeeList" element={<EmployeeList/>} employees={employees}/>
      <Route path="updateTask" element={<UpdateTask/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
