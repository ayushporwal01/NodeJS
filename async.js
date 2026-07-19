const fs = require("fs");
const https = require("https");

//First
console.log("Hello i'm in async");

var a = 123456789;
var b = 987654321;

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
  console.log(result);
}

var c = multiplyFn();
