var displayText = document.getElementById("displayText");
var number1;
var pressEqual = false;
var operator = "";

function pressNumber(number) {
  if (pressEqual) {
    displayText.innerHTML = "";
    pressEqual = false;
  }

  if (number == "0" && displayText.innerHTML == "" && operator == "") {
  } else {
    var text = displayText.innerHTML + number;
    displayText.innerHTML = text;
  }
}

function pressOperator(pressOperator) {
  if (number1 == null) {
    if(displayText.innerHTML != ""){
      number1 = parseInt(displayText.innerHTML);
    }else{
      number1 = 0;
    }
  } else {
    switch (operator) {
      case "+":
        number1 += parseInt(displayText.innerHTML);
        break;
      case "-":
        number1 -= parseInt(displayText.innerHTML);
        break;
      case "x":
        number1 *= parseInt(displayText.innerHTML);
        break;
      case "÷":
        number1 /= parseInt(displayText.innerHTML);
        break;

      default:
        break;
    }
  }

  operator = pressOperator;
  displayText.innerHTML = "";
}

function pressEqualBtn() {
  var number2 = parseInt(displayText.innerHTML);
  pressEqual = true;

  switch (operator) {
    case "+":
      displayText.innerHTML = (number1 + number2).toString();
      number1 = null;
      operator = "";
      break;
    case "-":
      displayText.innerHTML = (number1 - number2).toString();
      number1 = null;
      operator = "";
      break;
    case "x":
      displayText.innerHTML = (number1 * number2).toString();
      number1 = null;
      operator = "";
      break;
    case "÷":
      displayText.innerHTML = (number1 / number2).toString();
      number1 = null;
      operator = "";
      break;
  }
}

function pressClear() {
  displayText.innerHTML = "";
  number1 = null;
  pressEqual = false;
}
