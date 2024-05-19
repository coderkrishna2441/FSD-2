// Write a script to define two JSON objects named as “division1” and “division2” 
// having an array to store 5 integer numbers. Write this object in a file named 
// XYZ.txt using file system. Define third array as result which gives output as 
// explained below: Suppose first array contains base value and second array contains 
// power value and then third array will give output as: a^b.For example: first 
// array[0]=2 and second array[0]=3 then it should return 8 in third array[0] .Also 
// append this result in XYZ.txt and as well as on console.


var division1 = {"numbers":[1,2,3,4,5]};
var division2 = {"numbers":[6,7,8,9,10]};
var fs = require('fs');
var result = [];

var d1 = JSON.stringify(division1);
var d2 = JSON.stringify(division2);

fs.writeFileSync('XYZ.txt', d1);
fs.appendFileSync('XYZ.txt', d2);

for (var i = 0; i < division1.numbers.length; i++) {
    var base = division1.numbers[i];
    var power = division2.numbers[i];
    result.push(a**b);
}
console.log("Result Array:", result);
fs.appendFileSync('XYZ.txt', '\nResult Array: ' + JSON.stringify(result));
