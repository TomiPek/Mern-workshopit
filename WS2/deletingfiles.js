let fs = require("fs");

fs.unlink('uusiteksti.txt', (err) => {
    if (err) throw err;
    console.log('uusiteksti.txt was deleted');
    console.log(":(")
  });