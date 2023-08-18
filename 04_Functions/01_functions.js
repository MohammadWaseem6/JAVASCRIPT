// function addNum(num1, num2) {
//   console.log(num1 + num2);
// }
// function addNum(num1, num2) {
//   let result = num1 + num2;
//   return result;
//   return num1 + num2;
// }
// const result = addNum(4, 5);
// console.log("Result :", result);

function userlogin(username) {
  if (username === undefined) {
    console.log("Please Enter a Username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(userlogin("WASEEM"));
console.log(userlogin());
