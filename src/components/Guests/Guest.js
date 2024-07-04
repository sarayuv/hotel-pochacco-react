class Guest {
  constructor(id, firstName, lastName, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }

  print() {
    console.log(`Guest ID: ${this.id}`);
    console.log(`Guest First Name: ${this.firstName}`);
    console.log(`Guest Last Name: ${this.lastName}`);
    console.log(`Guest Email: ${this.email}`);
  }
}

export default Guest;
