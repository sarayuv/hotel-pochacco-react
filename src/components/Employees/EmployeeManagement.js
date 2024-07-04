import React, { useState } from "react";
import "../styles/EmployeeManagement.css";

class Employee {
  constructor(id, firstName, lastName, position, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
  }

  print() {
    console.log(`Employee ID: ${this.id}`);
    console.log(`Employee First Name: ${this.firstName}`);
    console.log(`Employee Last Name: ${this.lastName}`);
    console.log(`Employee Position: ${this.position}`);
    console.log(`Employee Salary: ${this.salary}`);
    console.log("--------------------------------");
  }
}

const EmployeeManagement = ({ setSection }) => {
  const [employees, setEmployees] = useState([]);
  const [employeeForm, setEmployeeForm] = useState({
    firstName: "",
    lastName: "",
    position: "",
    salary: "",
  });

  const [editForm, setEditForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    position: "",
    salary: "",
  });

  const addNewEmployee = () => {
    const { firstName, lastName, position, salary } = employeeForm;

    if (!firstName || !lastName || !position || !salary) {
      alert("Please fill in all fields.");
      return;
    }

    const newEmployee = new Employee(
      employees.length + 1,
      firstName,
      lastName,
      position,
      parseFloat(salary)
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

  const showAllEmployees = () => {
    employees.forEach((employee) => employee.print());
  };

  const editEmployee = () => {
    const id = parseInt(editForm.id);
    if (isNaN(id) || id < 1 || id > employees.length) {
      alert("Invalid employee ID");
      return;
    }

    const employeeToUpdate = employees.find((employee) => employee.id === id);
    if (!employeeToUpdate) {
      alert("Employee not found");
      return;
    }

    const updatedEmployee = new Employee(
      id,
      editForm.firstName || employeeToUpdate.firstName,
      editForm.lastName || employeeToUpdate.lastName,
      editForm.position || employeeToUpdate.position,
      parseFloat(editForm.salary) || employeeToUpdate.salary
    );

    const updatedEmployees = [...employees];
    const indexToUpdate = employees.findIndex((employee) => employee.id === id);
    updatedEmployees[indexToUpdate] = updatedEmployee;

    setEmployees(updatedEmployees);
    setEditForm({
      id: "",
      firstName: "",
      lastName: "",
      position: "",
      salary: "",
    });
    console.log("Employee updated successfully!");
  };

  const handleInputChange = (e, formSetter) => {
    const { name, value } = e.target;
    formSetter((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="employee-management">
      <h1>Hotel Pochacco Management System</h1>
      <h2>Employee Management</h2>
      <nav>
        <ul>
          <li
            className="choice-button"
            onClick={() => setSection("addNewEmployee")}
          >
            Add New Employee
          </li>
          <li
            className="choice-button"
            onClick={() => setSection("showAllEmployees")}
          >
            Show All Employees
          </li>
          <li
            className="choice-button"
            onClick={() => setSection("editEmployee")}
          >
            Edit Employee Data
          </li>
        </ul>
      </nav>

      {setSection === "addNewEmployee" && (
        <div>
          <h3>Add New Employee</h3>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={employeeForm.firstName}
            onChange={(e) => handleInputChange(e, setEmployeeForm)}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={employeeForm.lastName}
            onChange={(e) => handleInputChange(e, setEmployeeForm)}
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={employeeForm.position}
            onChange={(e) => handleInputChange(e, setEmployeeForm)}
          />
          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={employeeForm.salary}
            onChange={(e) => handleInputChange(e, setEmployeeForm)}
          />
          <button onClick={addNewEmployee}>Add Employee</button>
        </div>
      )}

      {setSection === "showAllEmployees" && (
        <div>
          <h3>Show All Employees</h3>
          <button onClick={showAllEmployees}>Show All Employees</button>
          <ul>
            {employees.map((employee) => (
              <li key={employee.id}>
                Employee ID: {employee.id} - First Name: {employee.firstName} -
                Last Name: {employee.lastName} - Position: {employee.position} -
                Salary: {employee.salary}
              </li>
            ))}
          </ul>
        </div>
      )}

      {setSection === "editEmployee" && (
        <div>
          <h3>Edit Employee</h3>
          <input
            type="text"
            name="id"
            placeholder="Employee ID"
            value={editForm.id}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <input
            type="text"
            name="firstName"
            placeholder="New First Name"
            value={editForm.firstName}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <input
            type="text"
            name="lastName"
            placeholder="New Last Name"
            value={editForm.lastName}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <input
            type="text"
            name="position"
            placeholder="New Position"
            value={editForm.position}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <input
            type="number"
            name="salary"
            placeholder="New Salary"
            value={editForm.salary}
            onChange={(e) => handleInputChange(e, setEditForm)}
          />
          <button onClick={editEmployee}>Edit Employee</button>
        </div>
      )}

      <ul>
        <li className="main-menu-button" onClick={() => setSection("main")}>
          Back to Main Menu
        </li>
      </ul>
    </div>
  );
};

export default EmployeeManagement;
