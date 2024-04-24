//One guest cant attend Dinner
var guestlist = ["Ali", "Ahmed", "Atif"];
//
var cantAttend = guestlist[1];
//printing a message that he couldNot attend
console.log(cantAttend, "could not attend the invitation");
//we are using splice method to remove an element.
guestlist.splice(1, 1, "Asad");
//printing message to each guest
guestlist.forEach(function (guestlist) { return console.log("MR ".concat(guestlist, " please visit my home and give me chance to eat dinner with you ")); });
