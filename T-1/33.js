// Write a JSON object which contains array of 3 objects. Each object contains 2 
// properties name and age. Now, sort an array values by age in descending order. 
// Print name in terminal as per the sorted age

var students = [{"name":"xyz","age":19},{"name":"abc",age:20},{"name":"trs",age:21}];
        
        // swaping age values in descending values
        for (var i = 0;i<students.length;i++)
        {
            for (var j = 0;j<students.length;j++)
            {
                if(students[i].age > students[j].age)
                {
                    var temp = students[i];
                    students[i] = students[j];
                    students[j] = temp;
                }
            }
        }

        // to display the object in ascending order
        for(var k = 0;k<students.length;k++)
        {
            console.log(students[k].name,students[k].age)
        }
