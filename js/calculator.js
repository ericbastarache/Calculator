//Set the calculations to 0 on page load
window.onload = function () {
  document.querySelector('p').innerHTML = 0;
  execute();
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
  var operator = "";
  var el = document.getElementsByTagName('button');
  var items = [];

  /*Loop through button elements and extract the values*/
  for(var i = 0; i < el.length; i++) {
    items.push(el[i].value);
    /*Filter out buttons with no value*/
    var finItems = items.filter(function bye(nope) {
      return nope !== "";
    });
  }
  items = [];
  console.log(finItems);

  

}
