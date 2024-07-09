import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EditEmployee = ({ employee, employees, setEmployees, setSection }) => {
  const [employeeForm, setEmployeeForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    position: "",
    salary: "",
  });

  useEffect(() => {
    console.log("Employee prop in useEffect:", employee);
    if (employee) {
      setEmployeeForm({
        id: employee?.id || "",
        firstName: employee?.firstName || "",
        lastName: employee?.lastName || "",
        position: employee?.position || "",
        salary: employee?.salary || "",
      });
    }
  }, [employee]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const updateEmployee = () => {
    const updatedEmployee = {
      id: employeeForm.id,
      firstName: employeeForm.firstName,
      lastName: employeeForm.lastName,
      position: employeeForm.position,
      salary: employeeForm.salary,
    };

    const updatedEmployees = employees.map((em) =>
      em.id == updateEmployee.id ? updatedEmployee : em
    );
    setEmployees(updatedEmployees);
    setSection("employees");
    console.log("Employee updated successfully!");
  };

  if (!employee) {
    console.log("Guest is null or undefined:", employee);
    return <div>Loading...</div>;
  }

  console.log("Employee and EmployeeForm:", employee, employeeForm);

  return (
    <div>
      <h3>Edit Employee Data</h3>
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

      <button onClick={updateEmployee}>Update Employee</button>

      <ul>
        <li className="employee-menu-button">
          <Link to={"../employees"}>Back to Employee Menu</Link>
        </li>
      </ul>
    </div>
  );
};

export default EditEmployee;
