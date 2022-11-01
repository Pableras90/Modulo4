var numA = () => parseInt(document.getElementById("operator-1").value);
var numB = () => parseInt(document.getElementById("operator-2").value);

var sum = (numA,numB) => numA + numB;
var rest = (numA,numB) => numA - numB;
var mult = (numA,numB) => numA * numB;
var div = (numA,numB) => numA / numB;

console.log(sum(1,2));
console.log(rest(1,2));
console.log(mult(2,3));
console.log(div(3,2));

var resultSum = () => document.getElementById("result").innerText = (!numA() || !numB()) ? "ERROR" : sum(numA(), numB()); //operador ternario
var resultRest = () => document.getElementById("result").innerText = (!numA() || !numB()) ? "ERROR" : rest(numA(), numB());
var resultMult = () => document.getElementById("result").innerText = (!numA() || !numB()) ? "ERROR" : mult(numA(), numB());
var resultDiv = () => document.getElementById("result").innerText = (!numA() || !numB()) ? "ERROR" : div(numA(), numB());


document.getElementById("buttonSum").addEventListener("click", resultSum);
document.getElementById("buttonRest").addEventListener("click", resultRest);
document.getElementById("buttonMult").addEventListener("click", resultMult);
document.getElementById("buttonDiv").addEventListener("click", resultDiv);