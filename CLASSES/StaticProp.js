class User {
  constructor(username) {
    this.username = username;
  }
  logme() {
    console.log(`username is :${this.username}`);
  }
  CreateId() {
    return `123`;
  }
}
const waseem = new User("waseem ");
console.log(waseem.CreateId());
