const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result'); // Changed to 'result'

  if (isNaN(height) || height <= 0) {
    result.innerHTML = `Please give a valid height: ${height}`;
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the result
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
