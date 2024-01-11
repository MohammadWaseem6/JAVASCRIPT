document.addEventListener('DOMContentLoaded', function () {
    var display = document.getElementById('display');

    var buttonValues = document.querySelectorAll('.number-btn');
    var operationButtons = document.querySelectorAll('.operation-btn');
    var equalButton = document.querySelector('.equal-btn');

    buttonValues.forEach(function (button) {
        button.addEventListener('click', function () {
            appendToDisplay(button.innerText);
        });
    });

    operationButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            appendToDisplay(' ' + button.innerText + ' ');
        });
    });

    equalButton.addEventListener('click', function () {
        calculateResult();
    });

    function appendToDisplay(value) {
        display.value += value;
    }

    function calculateResult() {
        try {
            var result = eval(display.value);
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    }
});
