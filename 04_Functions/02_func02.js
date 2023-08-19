// function calculatecartPrice(val1, val2, ...numb) {
//here three dots are REST operator
//   return numb;
// }
// console.log(calculatecartPrice(200, 400, 600, 2000, 3000));
// const user = {
//   username: "waseem",
//   age: "22",
//   price: "199",
// };
// function anyobject(anyuser) {
//   console.log(`username is ${anyuser.username} and price is ${anyuser.price}`);
//   console.log(`username is  ${anyuser.name} and age is ${anyuser.age}`);
// }

// anyobject(user);
// anyobject({
//   name: "mohammad", //we can pass object pass to func as wee
//   age: "63",
// });

//const MYnewarray = [200, 300, 400, 500]; //array to functions
function Arraytofunc(getarray) {
  return getarray[1];
}
// console.log(Arraytofunc(MYnewarray));
console.log(Arraytofunc([200,30,400,60000]));//we can directly pass array with any creation prior in vaiables
