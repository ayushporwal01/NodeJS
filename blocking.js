const crypto = require("crypto");

console.log("Hello World");

var a = 157586;
var b = 759138;

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");

// crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
//   if (err) throw err;
//   console.log("Key is generated");
// });

function multiplyFn() {
  var result = a * b;
  return result;
}

var c = multiplyFn();
console.log("Multiplication result is", c);
