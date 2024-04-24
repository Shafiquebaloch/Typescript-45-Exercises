//Our guest List
var guestlist2 = ["Ali", "Ahmed", "Atif",];
//who did not attend invitition
var cantAttend2 = guestlist2[0];
console.log(cantAttend2, "Cant attend");
//Replaced a guest who could not attend dinner
guestlist2.splice(0, 1, "Zulfiqar");
//printed a message for a big dinner table
console.log("I have arranged a dinner table");
//added a new guest at starting point of arrray
guestlist2.unshift("Rahim");
//added a new guest at ending point of arrray
guestlist2.push("fahim");
//added a new guest at middle of arrray
var middle = Math.floor(guestlist2.length / 2);
guestlist2.splice(middle, 0, "Khan");
//printed a message to our new guestes
console.log("new list");
guestlist2.forEach(function (guestlist2) { return console.log("hello ".concat(guestlist2, " would you want to taker a dinner with me ")); });
//informing 2 peoples can attend dinner
console.log("Sorry I can invite only two peoples for dinner");
//removing guests
while (guestlist2.length > 2) {
    var remove = guestlist2.pop();
    console.log("Sorry MR ".concat(remove, " I cant invite you at dinner"));
}
//inviting 2 peoples
console.log("Invitation for remaining guests");
guestlist2.forEach(function (guestlist2) { return console.log("MR ".concat(guestlist2, " you are invited to dinner")); });
//removing invited guests
guestlist2.pop();
guestlist2.pop();
console.log('Empty list', guestlist2);
