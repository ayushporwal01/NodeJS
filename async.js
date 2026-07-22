const fs = require("fs");
const https = require("https");

//First
console.log("Hello i'm in async");

var a = 157586;
var b = 759138;

//Second
https.get("https://dummyjson.com/products/1", (res) => {
  console.log("fetched data successfully");
});

//Third
setTimeout(() => {
  console.log("Executed after 5 seconds");
}, 5000);

//First
fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data: ", data);
});

//First
function multiplyFn() {
  var result = a * b;
  return result;
}

var c = multiplyFn();
console.log("Multiplication result is", c);
