import React, { useState } from "react";
//import "./EmployeeManagement.css";

class Employee {
  constructor(id, firstName, lastName, position, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
  }

  print() {
    console.log("Employee ID: " + this.id);
    console.log("Employee First Name: " + this.firstName);
    console.log("Employee Last Name: " + this.lastName);
    console.log("Employee Position: " + this.position);
    console.log("Employee Salary: " + this.salary);
    console.log("--------------------------------");
  }
}

const ManageEmployees = ({ employees, setEmployees }) => {
  const [employeeForm, setEmployeeForm] = useState({
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
      employees.length,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const showAllEmployees = () => {
    employees.forEach((employee) => employee.print());
  };

  const editEmployeeData = () => {
    console.log("Edit employee data logic here...");
    // Implement edit logic as needed
  };

  return (
    <div className="employee-manager">
      <h2>Employee Management</h2>
      <div>
        <button onClick={() => addNewEmployee()}>Add Employee</button>
        <button onClick={() => showAllEmployees()}>Show All Employees</button>
        {/* Add other buttons and functionalities as needed */}
      </div>
      <div>
        <h3>Add New Employee</h3>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={employeeForm.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={employeeForm.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={employeeForm.position}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={employeeForm.salary}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={addNewEmployee}>Create Employee</button>
      </div>
    </div>
  );
};

export default ManageEmployees;
