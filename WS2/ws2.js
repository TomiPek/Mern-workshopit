var fs = require("fs");

console.log("Ohjelma käynnistyi");
fs.readFile("example.txt", results);


for (var i=0; i < 15; i++) {
  console.log("Juu joo");
}

function results(err, data) {
  if (err) return console.error(err);
  console.log("results of fileread:");
  console.log(data.toString());
}


console.log("Ohjelman lopetus");