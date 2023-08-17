// Define a singleton object for a Tinder user
const TinderUser = {
    id: "12abc34",       // Unique user ID
    name: "Babar azam",  // User's name
    isloggedin: false,   // User's login status
    email: "babar@gmail.com" // User's email address
};
console.log(TinderUser);

// Define a user object with nested structure
const user = {
    email: "abcdef@gmail.com", // User's email address
    fullname: {
        userfullname: {
            firstname: "waseem", // User's first name
            midname: "mir",      // User's middle name
            lastname: "ahmad"    // User's last name
        }
    }
};
console.log(user.fullname.userfullname.lastname);

// Merge two objects using Object.assign
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

// Alternatively, you can use spread syntax to merge objects
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// Accessing properties and displaying information
console.log(TinderUser); // Display the TinderUser object
console.log(Object.keys(TinderUser)); // Display the keys of the TinderUser object
console.log(Object.values(TinderUser)); // Display the values of the TinderUser object
console.log(TinderUser.hasOwnProperty('email')); // Check if TinderUser has the 'email' property
