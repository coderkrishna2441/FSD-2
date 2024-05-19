// Create a JSON object named Home Expenses in which you have to add monthly expenses of transport , 
// food bill and names of different family members including mother,father,brother and sister.
// Print the expenses of father with his name

var homeExpenses = {
    "FamilyMembers": {
      "Mother": {
        "Name": "MNO",
        "Expenses": {
          "Transport": 3000,
          "FoodBill": 5000
        }
      },
      "Father": {
        "Name": "ABC",
        "Expenses": {
          "Transport": 5000,
          "FoodBill": 8000
        }
      },
      "Sister": {
        "Name": "XYZ",
        "Expenses": {
          "Transport": 2000,
          "FoodBill": 4000
        }
      },
      "Brother": {
        "Name": "PQR",
        "Expenses": {
          "Transport": 2500,
          "FoodBill": 4500
        }
      }
    }
  };

  console.log(homeExpenses.FamilyMembers.Father.Name + " " + homeExpenses.FamilyMembers.Father.Expenses.Transport + " " + homeExpenses.FamilyMembers.Father.Expenses.FoodBill);
  
