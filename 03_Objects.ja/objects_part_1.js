// Singleton objects

// Define a Symbol for a unique property key
const mSym = Symbol("key1");

// Creating an object using object literal syntax
const user = {
    // Properties of the user object
    name: "waseem",
    "fullname": "wasu ahmad meer",
    [mSym]: "mykeys",
    age: 22,
    address: "sopore",
    loggedin: false,
    email: "waseem@google.com"
};

// Accessing object properties using dot notation and square brackets
// console.log(user.address);
// console.log(user["fullname"]);
// console.log(user[mSym]);

// Changing the value of the 'email' property
// user.email = "hello@abc"; // You can change property values like this

// Freezing the 'user' object to prevent further changes
// Object.freeze(user);
// user.email = "email@email.com"; // This change will not take effect due to freezing

// Adding a new method 'greeting' to the 'user' object
user.greeting = function () {
    console.log("hello wasu");
};

// Adding another method 'greetingtwo' to the 'user' object
user.greetingtwo = function () {
    console.log(`hello wasu, ${this.name}`);
};

// Calling the 'greeting' method on the 'user' object
user.greeting();

// Calling the 'greetingtwo' method on the 'user' object
user.greetingtwo();

// End of code

/* Documentation:*/
// This code demonstrates the usage of object literals in JavaScript to create a 'user' object.
// The object contains various properties such as 'name', 'fullname', 'age', 'address', 'loggedin', and 'email'.
// Additionally, a unique Symbol property is used as a key within the object.
// The code also showcases how to add methods to objects using function expressions.
// Two methods, 'greeting' and 'greetingtwo', are added to the 'user' object to display different greetings.
// The 'greeting' method prints a simple greeting message, while 'greetingtwo' uses string interpolation to greet with the user's name.

