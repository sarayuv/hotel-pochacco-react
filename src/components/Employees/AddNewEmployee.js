import React, { useState } from "react";
import { Link } from "react-router-dom";
import Employee from "./Employee";

const AddNewEmployee = ({ employees, setEmployees }) => {
  const [employeeForm, setEmployeeForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    position: "",
    salary: "",
  });

  const addNewEmployee = () => {
    const newEmployee = new Employee(
      employees.length + 1,
      employeeForm.firstName,
      employeeForm.lastName,
      employeeForm.position,
      parseFloat(employeeForm.salary)
    );
    setEmployees([...employees, newEmployee]);
    setEmployeeForm({
      firstName: "",
      lastName: "",
      position: "",
      salary: "",
    });
    console.log("Employee added successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="add-new-employee-container">
      <h3>Add New Employee</h3>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={employeeForm.firstName}
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={employeeForm.lastName}
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="position"
        placeholder="Position"
        value={employeeForm.position}
        onChange={handleInputChange}
      />

      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={employeeForm.salary}
        onChange={handleInputChange}
      />

      <br />

      <button onClick={addNewEmployee}>Add Employee</button>

      <ul>
        <li className="employee-menu-button">
          <Link to={"../employees"}>Back to Employee Menu</Link>
        </li>
      </ul>
    </div>
  );
};

export default AddNewEmployee;
