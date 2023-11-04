class User {
  constructor(usernanme, email, password) {
    this.usernanme = usernanme;
    this.password = password;
    this.email = email;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}Mohammad`;
  }
  set password(value) {
    return (this._password = value);
  }
}
const waseem = new User("Mohammad Waseem", "waseemmer110@gmail.com", "wasu");
console.log(waseem.email);
