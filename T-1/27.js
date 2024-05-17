//Write a function 'FirstAndLast' that takes in an array, and returns an object with:
// 1) the first element of the array as the object's key, and
// 2) the last element of the array as that key's value. 
// (Example input: ['ABC', 'DEF', 'Employee', 'Manager'] output: ABC : 'Manager')

var arr = ["ABC","DEF","employee","Manager"];
        
function FirstAndLast()
    {
        var last = arr[(arr.length)-1];
        var obj = {};
        obj[arr[0]] = last;
        console.log(obj);
    }

FirstAndLast();
