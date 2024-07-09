class Employee {
  constructor(id, firstName, lastName, position, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
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

export default Employee;
