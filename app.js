var numA = () => parseInt(document.getElementById("operator-1").value);
var numA = () => parseInt(document.getElementById("operator-2").value);

var sum = (numA,numB) => numA + numB;
var rest = (numA,numB) => numA - numB;
var mult = (numA,numB) => numA * numB;
var div = (numA,numB) => numA / numB;


var div = (numbA,numB) => numA+numB;

var getNumerSum= () =>document.getElementById("result").innerHTML = sum();

document.getElementById("buttonSum").addEventListener("click"),NumberSum;