import React from "react";
import { Link } from "react-router-dom";
import Employee from "./Employee";

const ShowAllEmployees = ({ employees, setEmployees }) => {
  return (
    <div>
      <h3>Show All Employees</h3>
      {/* display employees list */}

      <ul>
        <li className="employee-menu-button">
          <Link to={"../employees"}>Back to Employee Menu</Link>
        </li>
      </ul>
    </div>
  );
};

export default ShowAllEmployees;
