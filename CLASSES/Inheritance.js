class User {
  constructor(username) {
    this.username = username;
  }
  logme() {
    console.log(`USERNAME IS : ${this.username}`);
  }
}
class teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addcourse() {
    console.log(`Latest course was added to your cart By: ${this.username}`);
  }
}
const chai = new teacher("waseem", "chai@123", "4321");
chai.addcourse();
const masalChai = new User("MasalaCHAAAAI");
masalChai.logme()
console.log(chai instanceof teacher);