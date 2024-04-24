//Our guest List
var guestlist1 = ["Ali", "Ahmed", "Atif", "Muzammil"];
//who did not attend invitition
var cantAttend1 = guestlist1[0];
console.log(cantAttend1, "Cant attend");
//Replaced a guest who could not attend dinner
guestlist1.splice(0, 1, "Zulfiqar");
//printed a message for a big dinner table
console.log("I have arranged a dinner table");
//added a new guest at starting point of arrray
guestlist1.unshift("Rahim");
//added a new guest at ending point of arrray
guestlist1.push("fahim");
//added a new guest at middle of arrray
var middleIndex = Math.floor(guestlist1.length / 2);
guestlist1.splice(middleIndex, 0, "Khan");
//printed a message to our new guestes
console.log("New list");
guestlist1.forEach(function (guestlist2) { return console.log("Salam ".concat(guestlist2, " would you want to take a dinner with me ")); });
