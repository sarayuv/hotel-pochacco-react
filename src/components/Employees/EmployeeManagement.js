import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddNewEmployee from "./AddNewEmployee";
import ShowAllEmployees from "./ShowAllEmployees";
import EditEmployee from "./EditEmployee";
import "../../styles/Employees/EmployeeManagement.css";

const EmployeeManagement = ({ employees, setEmployees }) => {
  return (
    <div className="employee-management">
      <h2>Employee Management</h2>

      <img
        src={`${process.env.PUBLIC_URL}/images/employee_pochacco.png`}
        alt="Employee Pochacco"
        className="employee_pochacco"
      />

      <nav>
        <ul>
          <li className="choice-button">
            <Link to={"add-new-employee"}>Add New Employee</Link>
          </li>

          <li className="choice-button">
            <Link to={"show-all-employees"}>Show All Employees</Link>
          </li>

          <li className="choice-button">
            <Link to={"edit-employee"}>Edit Employee Data</Link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li className="main-menu-button">
            <Link to="/">Back to Main Menu</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="add-new-employee"
          element={
            <AddNewEmployee employees={employees} setEmployees={setEmployees} />
          }
        />
        <Route
          path="show-all-employees"
          element={
            <ShowAllEmployees
              employees={employees}
              setEmployees={setEmployees}
            />
          }
        />
        <Route
          path="edit-employee"
          element={
            <EditEmployee employees={employees} setEmployees={setEmployees} />
          }
        />
      </Routes>
    </div>
  );
};

export default EmployeeManagement;
