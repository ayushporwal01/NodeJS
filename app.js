const { calculateSum, calculateMultiply } = require("./calculate");

var a = 6;
var b = 9;

const data = require("./data.json");
console.log(data);

calculateSum(a, b);
calculateMultiply(a, b);
