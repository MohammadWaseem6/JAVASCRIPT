// const myHeros = ["all", " islamic ", "persons"]
// const myHerose2 = ["we ", " are ", " one"]
// myHeros.push(myHerose2)
// console.log(myHeros);
// console.log(myHeros.concat(myHerose2))
// const allHeros= myHeros.concat(myHerose2)
// console.log(all);
/***  spread operator ... ****/
// const allHeros = [...myHeros, ...myHerose2]//... three dot is spread operator
// console.log(allHeros);

/*FLAT-> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.*/ 
// const Another_Array= [1,2,3,4,[5,4,3,6,],6,7,8,[9,8,7,6],87]
// const Real_Another_Array= Another_Array.flat(Infinity)
// console.log(Real_Another_Array);
// console.log(Array.isArray("waseem"));//checks is it array
// console.log(Array.from("waseem"));//converts into array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));