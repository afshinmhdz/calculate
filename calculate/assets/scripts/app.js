const defaultResult = 0;
let currentResult = defaultResult;
let logEntries=[]; 
// Get input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
} 

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc}${operator}${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  const logEntry={
    operation:'ADD',
    prevResult:initialResult,
    number:enteredNumber,
    result:currentResult
  }
  
  logEntries.push(logEntry.operation,logEntry.result );
  console.log(logEntries);
}
addBtn.addEventListener("click", add);

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult  *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}
multiplyBtn.addEventListener("click", multiply);

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult  -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}
subtractBtn.addEventListener("click", subtract);

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /=  enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}
divideBtn.addEventListener("click", divide);
