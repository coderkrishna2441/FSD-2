// Write a JSON script by entering user detail of three different person having same age group in 
// string format method. Print the following result in object form. 
// (1) User Details 
// (2) Name of 2nd person and his/her age.

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 25 }
  ];
  
  console.log("User Details:");
  console.log(users);
  
  console.log("Name of 2nd person and his/her age:");
  console.log(users[1].name + " - " + users[1].age);
