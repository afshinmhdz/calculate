var userInput = document.getElementById("input-number");
const clickmeBtn = document.getElementById("btnMakeArray");
const resultBtn = document.getElementById("btnResult");
let logEntries = [];
function valid(_userInput) {
  var input = /^[0-9]+$/;
  if (_userInput.value.match(input)) {
    alert("Input is a number");
    logEntries.push(_userInput);
  } else {
    alert("input is a string");
  }
}
function result() {
  var r=logEntries[0];
  alert('first number in array is:'+r.value);
}
resultBtn.addEventListener("click", result);

function array() {
  valid(userInput);
  
}

clickmeBtn.addEventListener("click", array);
