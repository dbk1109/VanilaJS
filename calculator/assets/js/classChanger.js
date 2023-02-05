let display = document.querySelector(".display");
let btns = document.querySelectorAll(".numbers button");
const DEFAULT_TEXT = display.innerText;
let togglePlus = true;
let operators = ["/", "*", "-", "+", "%"];

function onNumberClick(btn) {
  let nowText = display.innerText;
  let targetNumber = btn.target.innerText;

  if (DEFAULT_TEXT === display.innerText || nowText === "0") {
    if (targetNumber != "AC") {
      display.innerText = targetNumber;
    }
  } else if (targetNumber === "AC") {
    display.innerText = "0";
  } else if (targetNumber === "+/-") {
    if (togglePlus) {
      togglePlus = false;
      display.innerText = "-";
      display.innerText += nowText;
    } else {
      togglePlus = true;
      display.innerText = nowText.substring(1, nowText.length);
    }
  } else if (operators.includes(targetNumber)) {
    singleOperator(btn);
  } else if (targetNumber === "=") {
    display.innerText = eval(nowText);
  } else {
    display.innerText += targetNumber;
  }
}

function onNumberDown(btn) {
  btn.target.classList.add("onClick");
}
function onNumberUp(btn) {
  btn.target.classList.remove("onClick");
}

function singleOperator(btn) {
  let targetText = btn.target.innerText;
  let nowText = display.innerText;
  let otherText = nowText.substring(0, nowText.length - 1);
  let lastText = nowText.substring(nowText.length - 1, nowText.length);
  if ((lastText = targetText && operators.includes(lastText))) {
    display.innerText = otherText;
  }
  display.innerText += targetText;
}

for (let btn = 0; btn < btns.length; btn++) {
  btns[btn].addEventListener("mousedown", onNumberDown);
  btns[btn].addEventListener("click", onNumberClick);
  btns[btn].addEventListener("mouseup", onNumberUp);
}
