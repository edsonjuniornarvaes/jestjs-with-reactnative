module.exports = class Person {
  fullName;
  email;
  birthDay;
  constructor(fullName: string, email: string, birthDay: Date) {
    this.fullName = fullName;
    this.email = email;
    this.birthDay = birthDay;
  }
};
