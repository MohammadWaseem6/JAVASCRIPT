// Create a Promise and store it in a variable
// all about promises
const promiseone = new Promise(function (resolve, reject) {
  // Set a timeout to simulate an asynchronous task
  setTimeout(function () {
    console.log("async task is completed");
    // Resolve the Promise when the task is complete
    resolve();
  }, 1000);
});

// Attach a 'then' handler to the promise for successful resolution
promiseone.then(function () {
  console.log("promise consumed");
});

// ------------------------------

// Create a Promise without storing it in a variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 is resolved");
});

// ------------------------------

// Create a Promise that resolves with parameters
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // Resolve the Promise with an object containing username and email
    resolve({ username: "waseem", email: "was@example.com" });
  }, 1000);
});

// Attach a 'then' handler to log the resolved user object
promiseThree.then(function (user) {
  console.log(user);
});

// ------------------------------

// Create a Promise with error handling
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      // Resolve the Promise with a user object
      resolve({ username: "Mohammad waseem", password: 123 });
    } else {
      // Reject the Promise with an error message
      reject("ERROR OCCURRED: Something went wrong");
    }
  }, 1000);
});

// Chain 'then', 'catch', and 'finally' handlers to handle Promise resolution
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username2) => {
    // Perform additional actions here
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

// ------------------------------

// Create another Promise with error handling
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      // Resolve the Promise with a user object
      resolve({ username: "javascript", password: 3333 });
    } else {
      // Reject the Promise with an error message
      reject("ERROR: Js went wrong");
    }
  }, 1000);
});

// Define an async function to consume PromiseFive using 'await'
async function consumePromiseFive() {
  try {
    // Await the resolution of promiseFive and log the response
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    // Handle any errors that occur during Promise resolution
    console.log(error);
  }
}

// Call the async function to consume promiseFive
consumePromiseFive();

// ------------------------------

// The following code fetches data from an external API using the 'fetch' function
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// ------------------------------
