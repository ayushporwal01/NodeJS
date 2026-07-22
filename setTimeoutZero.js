console.log("Hello World");

var a = 157586;
var b = 759138;

//it will only be called once call stack of main thread is empty
setTimeout(() => {
  console.log("call me right now!!!");
}, 0);

setTimeout(() => {
  console.log("call me after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
  var result = a * b;
  return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is", c);
