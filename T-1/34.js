//  Write one JSON string with date property (yyyy-mm-dd) and print date in India standard time. 

var dateString = "2024-05-19";
var date = new Date(dateString);

// Convert date to Indian Standard Time and print
console.log("Date in India Standard Time:", date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
