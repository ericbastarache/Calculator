window.onload = () => {
  let elems = document.getElementsByTagName('button');
  let calcScreen = document.querySelector('p');
  let clear = document.getElementById('clear');

  for(var i = 0; i < elems.length; i++) {
    if(elems[i].innerHTML === "=") {
      elems[i].addEventListener('click', calculate(i));
    } else {
      elems[i].addEventListener('click', performOperations(i));
    }
  }

  const performOperations = (i) => {
    return () => {
      if(elems[i].innerHTML === "÷") {
        calcScreen.innerHTML += "/";
      } else if(elems[i].innerHTML === "x") {
        calcScreen.innerHTML += "*";
      } else {
        calcScreen.innerHTML += elems[i].innerHTML;
      }
    };
  }

  clear.onclick = () => {
    calcScreen.innerHTML = "";
  };

  const calculate = (i) => {
    return () => {
      calcScreen.innerHTML = eval(calcScreen.innerHTML);
    };
  }

};
