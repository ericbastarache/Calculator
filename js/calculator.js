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

function run () {

}




window.onload = function () {
  document.querySelector('p').innerHTML = 0;
}
