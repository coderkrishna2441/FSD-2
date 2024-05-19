// Write a script to define two JSON objects named as “division1” and “division2” 
// having an array to store names of students. These name should be sorted 
// alphabetically in the object and should be be written to the file. At last, both 
// division objects should be visible with names sorted alphabetically in file.

var fs = require("fs");
var data = {};
var division1 = {"names":['krishna','rumesha','saumya','aditi']};
var division2 = {"names":['divya','tithi','akash']};
data["names"] = division1.names.concat(division2.names);
data["names"].sort();
data = JSON.stringify(data);
fs.writeFileSync("names.txt",data);
