//Set a global to get all buttons
var el = document.getElementsByTagName('button');

//Set the calculations to 0 on page load
window.onload = function() {
  document.querySelector('p').innerHTML = "0";

  //Add a unique ID to each button
  var cls = document.getElementsByClassName('btn-calc');
  for (var ids = 0, length = cls.length; ids < length; ids++) {
    cls[ids].id = "btn_" + [ids + 1];
  }

  //Add event handlers to each button
  document.getElementById('btn_1').addEventListener('click', function(e) {
    document.querySelector('p').innerHTML = "0";
  });

  document.getElementById('btn_2').addEventListener('click', function(e) {
    document.querySelector('p').innerHTML += e.target.value;
    console.log(document.querySelector('p').innerHTML);
  });

  document.getElementById('btn_3').addEventListener('click', function(e) {
    document.querySelector('p').innerHTML += e.target.value;
    console.log(document.querySelector('p').innerHTML);
  });

  document.getElementById('btn_4').addEventListener('click', function(e) {
    document.querySelector('p').innerHTML += e.target.value;
    console.log(document.querySelector('p').innerHTML);
  });

  document.getElementById('btn_5').addEventListener('click', function(e) {
    document.querySelector('p').innerHTML += e.target.value;
    console.log(document.querySelector('p').innerHTML);
  });

  document.getElementById('btn_6').addEventListener('click', function(e) {
    document.querySelector('p').innerHTML += e.target.value;
    console.log(document.querySelector('p').innerHTML);
  });

  document.getElementById('btn_7').addEventListener('click', function(e) {
    document.querySelector('p').innerHTML += e.target.value;
    console.log(document.querySelector('p').innerHTML);
  });

  document.getElementById('btn_8').addEventListener('click', function(e) {
    document.querySelector('p').innerHTML += e.target.value;
    console.log(document.querySelector('p').innerHTML);
  });

  document.getElementById('btn_9').addEventListener('click', function(e) {
    document.querySelector('p').innerHTML += e.target.value;
    console.log(document.querySelector('p').innerHTML);
  });

  document.getElementById('btn_10').addEventListener('click', function(e) {
    document.querySelector('p').innerHTML += e.target.value;
    console.log(document.querySelector('p').innerHTML);
  });

  document.getElementById('btn_11').addEventListener('click', function(e) {
    document.querySelector('p').innerHTML += e.target.value;
    console.log(document.querySelector('p').innerHTML);
  });

  document.getElementById('btn_12').addEventListener('click', function(e) {

  });

  execute();
}

function sum(num1, num2) {
  return Math.round(num1 + num2);
}

function divide(num1, num2) {
  return Math.round(num1 / num2);
}

function subtract(num1, num2) {
  return Math.round(num1 - num2);
}

function multiply(num1, num2) {
  return Math.round(num1 * num2);
}

function clear() {
  document.querySelector('p').innerHTML = 0;
}

/*Where the magic happens:
/*Continue to perform math operations until the equals button is clicked
/*When the equals button is clicked, execute the functions and return a result
*/
function execute() {
  var res = "";
  var operator = "";
  var items = [];

  /*Loop through button elements and extract the values*/
  for (var i = 0; i < el.length; i++) {
    items.push(el[i].value);
    /*Filter out buttons with no value*/
    var finItems = items.filter(function bye(nope) {
      return nope !== "";
    });
  }
  //Clear the original array of items
  items = [];
  console.log(finItems);

}
