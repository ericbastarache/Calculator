//Set the calculations to 0 on page load
window.onload = function () {
  document.querySelector('p').innerHTML = 0;
}

function sum (num1, num2) {
  return Math.round(num1 + num2);
}

function divide (num1, num2) {
  return Math.round(num1 / num2);
}

function subtract (num1, num2) {
  return Math.round(num1 - num2);
}

function multiply (num1, num2) {
  return Math.round(num1 * num2);
}

function clear () {
  document.querySelector('p').innerHTML = 0;
}

/*Where the magic happens:
/*Continue to perform math operations until the equals button is clicked
/*When the equals button is clicked, execute the functions and return a result
*/
function execute () {
  var res = "";
  
}
