let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");

let answer = document.querySelector("#answer");
let btnAnswer = document.querySelector(".btn-answer");
let btnClear = document.querySelector(".btn-clear");


let btnClearFunc = () => {
  num1.value = "";
  num2.value = "";
  num1.style.backgroundColor = "";
  num2.style.backgroundColor = "";
};

btnClear.addEventListener("click", btnClearFunc);

// Numbers were being passed at strings, I used parseInt to the value
let biggerNum = () => {
  num1.value = parseInt(num1.value);
  num2.value = parseInt(num2.value);

  if (num1.value > num2.value) {
    num1.style.backgroundColor = "#af77d5";
  } else if (num2.value > num1.value) {
    num2.style.backgroundColor = "#af77d5";
  } else {
    return "";
  }
};
btnAnswer.addEventListener("click", biggerNum);
