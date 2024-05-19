// Write a JS to store an array of objects having height and name. display name and 
// height of person with highest height

var height_data = [
    {"name": "krishna", "height": 20},
    {"name": "kishan", "height": 120},
    {"name": "priyansh", "height": 220},
];

var max_height = height_data[0].height;
var max_person_name = height_data[0].name;

for (var i = 1; i < height_data.length; i++) {
    if (height_data[i].height > max_height) {
        max_height = height_data[i].height;
        max_person_name = height_data[i].name;
    }
}

console.log("Person with the highest height:", max_person_name);
console.log("Height:", max_height);
