console.log("Hello i'm in sync");

var a = 157586;
var b = 759138;

function multiplyFn(x, y) {
  var result = a * b;
  return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is", c);
