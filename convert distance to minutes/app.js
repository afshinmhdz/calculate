const distancInput = document.getElementById("input-number");
const lblResult = document.getElementById("lblResult");
const submitBtn = document.getElementById("submitBtn");


function getUserNumberInput() {
  //function for convert input string to integer
  return parseInt(distancInput.value);
}

function Convert() {
  const enteredNumber = getUserNumberInput();
  var temp;
  temp = enteredNumber / 40;
  var result;
  result = temp * 60;
  lblResult.innerHTML = result;
}
submitBtn.addEventListener("click", Convert);
