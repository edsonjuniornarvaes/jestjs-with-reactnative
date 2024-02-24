const Person2 = require('../toEqual/index');

class Client extends Person2 {
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

class Employee extends Person2 {
  salary;
  constructor(fullname?: string, email?: string, birthday?: Date, salary?: string) {
    super(fullname, email, birthday);
    this.salary = salary;
  }
}


export {Client, Employee}