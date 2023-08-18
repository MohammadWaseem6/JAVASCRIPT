// Define an object named 'course' with properties 'name', 'price', and 'Courseinstructor'
const course = {
    name: "javascript",
    price: "1000",
    Courseinstructor: "abc",
  };
  
  // Output the value of the 'Courseinstructor' property from the 'course' object
  console.log(course.Courseinstructor);
  
  // Destructuring assignment: Extract the value of 'Courseinstructor' and assign it to the 'instructor' variable
  const { Courseinstructor: instructor } = course; // object destructuring
  
  // Output the value of the 'instructor' variable (result of destructuring) to the console
  console.log(instructor);
  