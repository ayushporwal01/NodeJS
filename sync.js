console.log("Hello i'm in sync");

var a = 157586;
var b = 759138;

function multiplyFn() {
  var result = a * b;
  return result;
}

var c = multiplyFn();
console.log("Multiplication result is", c);
