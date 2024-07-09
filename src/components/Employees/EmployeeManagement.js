import React from "react";
import { Link, Route, Router } from "react-router-dom";
import "../../styles/Employees/EmployeeManagement.css";

const EmployeeManagement = ({ employees, setEmployees }) => {
  return (
    <div className="employee-management">
      <h2>Employee Management</h2>

      <nav>
        <ul>
          <li className="choice-button">
            <Link to={"add-new-employee"}>Add New Employee</Link>
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
    </div>
  );
};

export default EmployeeManagement;
