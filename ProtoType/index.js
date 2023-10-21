const myher = ["waseem", " ahmad", "meer"];
console.log(myher);

function mulby5(num) {
  return num * 5;
}
mulby5.power = 2;
console.log(mulby5);
console.log(mulby5.power);
console.log(mulby5.prototype);

function createUser(username, score) {
  this.username = username;
}
createUser()