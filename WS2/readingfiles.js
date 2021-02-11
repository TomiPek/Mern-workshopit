var fs = require("fs");

console.log("Program started");
var data = fs.readFileSync("harjoitus.txt");
var data2 = fs.readFileSync("harj2.txt");

console.log(data.toString());
console.log(data2.toString());



console.log("Ohjelman lopetus");