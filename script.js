let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");

let answer = document.querySelector("#answer");
let btnAnswer = document.querySelector(".btn-answer");
let btnClear = document.querySelector(".btn-clear");

const btnClearFunc = () => {
  box1.value = "";
  box2.value = "";
  box1.style.backgroundColor = "";
  box2.style.backgroundColor = "";
};

btnClear.addEventListener("click", btnClearFunc);

const biggerNum = () => {
  let numeroUno = Number(box1.value);
  let numeroDos = Number(box2.value);

  if (numeroUno > numeroDos) {
    box1.style.backgroundColor = "#af77d5";
  } else if (numeroUno > numeroDos) {
    box2.style.backgroundColor = "#af77d5";
  } else {
    return "";
  }
};
btnAnswer.addEventListener("click", biggerNum);

