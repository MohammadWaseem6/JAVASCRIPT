const form = document.querySelector('form');
const result = document.querySelector('#result'); // Changed to 'result'
const weightGuide = document.querySelector('#weight-guide'); // Added weightGuide

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);

  if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    result.innerHTML = 'Please provide valid height and weight.';
    weightGuide.innerHTML = ''; // Clear weight guide if input is invalid
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `Your BMI: <span>${bmi}</span>`;
    
    let weightCategory = '';
    if (bmi < 18.6) {
      weightCategory = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      weightCategory = 'Normal weight';
    } else {
      weightCategory = 'Overweight';
    }

    // Display weight category
    weightGuide.innerHTML = `<h3>Weight Category:</h3><p>${weightCategory}</p>`;
  }
});
