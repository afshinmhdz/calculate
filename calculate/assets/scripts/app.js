const defaultResult=0;
let currentResult=defaultResult;
function add()
{
    const calcDescription=`${currentResult}+${userInput.value}`;
    currentResult=currentResult+parseInt(userInput.value);
    outputResult(currentResult,calcDescription);
}
addBtn.addEventListener('click',add);

function mul()
{
    const calcDescription=`${currentResult}*${userInput.value}`;
    currentResult=currentResult*parseInt(userInput.value);
    outputResult(currentResult,calcDescription);
}
multiplyBtn.addEventListener('click',mul);

function sub()
{
    const calcDescription=`${currentResult}-${userInput.value}`;
    currentResult=currentResult-parseInt(userInput.value);
    outputResult(currentResult,calcDescription);
}
subtractBtn.addEventListener('click',sub);

function div()
{
    const calcDescription=`${currentResult}/${userInput.value}`;
    currentResult=currentResult/parseInt(userInput.value);
    outputResult(currentResult,calcDescription);
}
divideBtn.addEventListener('click',div);