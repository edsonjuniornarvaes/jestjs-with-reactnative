module.exports = class Person {
  fullname;
  email;
  birthday;
  constructor(fullname: string, email: string, birthday: Date) {
    this.fullname = fullname;
    this.email = email;
    this.birthday = birthday;
  }
};


