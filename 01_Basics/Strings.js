const name = "waseem";
const repo = 10
// console.log(name +   repo );
console.log(`my name is ${name} and my repo  count is ${repo}`);
const gamename = new String('mohammad')

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.toUpperCase());
console.log(gamename.length);
console.log(gamename.charAt(1));
console.log(gamename.indexOf('d'));
const newString = gamename.substring(4, 5);
console.log(newString);
const anotherString = gamename.slice(0, 7);
console.log(anotherString);
const anotherString2 = gamename.trim(); //works only at white spaces
console.log(anotherString2);
const anotherString3 = "abcdeferjdvjdfvjk";
console.log(anotherString3.replace('er', '__'))
const anotherString4="bbbbbbbbbbbbbbbbbb"
console.log(anotherString4.includes('vv'));