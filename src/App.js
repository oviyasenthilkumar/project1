import Login from "./components/Login";

import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import UpdateTask from "./components/UpdateTask";



function App() {

  return (
   
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="addEmployee" element={<AddEmployee/>}/>
      <Route path="employeeList" element={<EmployeeList/>} />
      <Route path="updateTask" element={<UpdateTask/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
