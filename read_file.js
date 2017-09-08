var fs = require("fs");

var fileName = process.argv[2];

// Asynchronous - Opening File
console.log("Going to open file!");
fs.readFile(fileName, function(err, data) {
   if (err) {
    return console.error(err);
   }
  console.log("File opened successfully!");   
  console.log("Asynchronous read: " + data.toString());  
});