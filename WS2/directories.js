let fs = require("fs");

// Tehdään newdata kansio
fs.mkdir("newdata/", { recursive: true }, err => {
  if (err) throw err;
  console.log("Kansio valmis");
});

// Tehdään tiedosto kansioon ja kirjoitetaan sinne
fs.writeFile(
  "newdata/uusiTiedosto.txt",
  "testi tekstiä",
  function(err) {
    if (err) throw err;
  }
)