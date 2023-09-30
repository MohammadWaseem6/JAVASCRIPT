//for of loop
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (const num of arr) {
 // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
   // console.log(`value of each character is : ${greet}`);
    
}

//Map ,always give unique values , no duplicacy od emements
 const map = new Map()
    map.set('IN' , "India")
    map.set('JK', "Jammu & Kashmir")
    map.set('FR', "France")
    //console.log(map);
 for (const [key,value] of map) {
    //console.log(key , ":-" ,value);
 }

 //objects
 //***********this structure is not iteratable */
//  const myobj={
//     game1:'nfs',
//     game2:"spiderman"
//  }
//  for (const [key,value] of myobj) {
//     console.log(key , value);
//  }