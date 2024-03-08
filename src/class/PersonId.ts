const Person2 = require('../class/Person')

module.exports = class Client extends Person2 {
  address;
  constructor(
    fullname?: string,
    email?: string,
    birthday?: Date,
    address?: string,
  ) {
    super(fullname, email, birthday);
    this.address = address;
  }
}

module.exports = class Employee extends Person2 {
  salary;
  constructor(fullname?: string, email?: string, birthday?: Date, salary?: string) {
    super(fullname, email, birthday);
    this.salary = salary;
  }
}