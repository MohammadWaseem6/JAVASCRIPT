const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "White") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "Blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "Yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "Green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "Red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "Purple") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "Skyblue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
