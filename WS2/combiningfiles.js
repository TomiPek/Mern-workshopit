let fs = require("fs");
console.log("Program started");

let data1 = fs.readFileSync("harjoitus.txt") + "\n";
let data2 = fs.readFileSync("harj2.txt") + "\n";
text = "I wrote this!";
let data3 = data1 + data2 + text;

// Tehdään uusi tekstitiedosto ja lisätään siihen teksti perään.
fs.writeFileSync('uusiteksti.txt', data3);

// Appendilla vielä lisää tekstiä entisen perään
fs.appendFileSync('uusiteksti.txt', "\nLisää tekstiä!");
let valmis = fs.readFileSync("uusiteksti.txt");

console.log(valmis.toString());


