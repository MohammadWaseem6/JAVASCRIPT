const myArr = [0, 1, 2, 3, 4, 5, 6, 7]
// const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7)
// const heros = ["hello", " javascript"]
// console.log(myArr)
// console.log(myArr2)
// console.log(heros);
//ARRAYS METHODS
// myArr.push(100)
// console.log(myArr);
// myArr.pop()//pop's last element
// console.log(myArr);
// myArr.unshift(20000)//it adds element front of arrays
// console.log(myArr);
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(100));//it searches(checks is it in the list or not) element and gives true or false result
// console.log(myArr.indexOf(7));//it gives you index of a given  element
// const newarr= myArr.join()//it binds and changes array to string
// console.log(myArr);
// console.log(newarr);
//****SLICE AND SPLICE ******/
// Slice a portion of myArr and store it in mya1
const mya1 = myArr.slice(1, 4);
// Display the original myArr and sliced mya1 arrays
console.log("Original Array:", myArr);
console.log("Sliced Array:", mya1);


/*slice() Method:

Creates a new array with selected elements from the original array, leaving the original array unchanged.
Syntax: array.slice(startIndex, endIndex)
splice() Method:

Modifies the original array by adding, removing, or replacing elements, and returns the removed elements as a new array.*/
// Splice a portion of myArr and store the removed elements in mya2
const mya2 = myArr.splice(1, 4);
// Display the modified myArr (elements removed) and the removed mya2 array
console.log("Modified Array:", myArr);
console.log("Removed Elements:", mya2);
// Display myArr again after splicing (it contains the remaining elements)
console.log("Remaining Array:", myArr);
