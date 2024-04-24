//Assingment NO 28 checking the age but using if else conditions.
var personAge = 30;
if (personAge < 2) {
    console.log("He is a baby");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("He is toddler");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("He is Kid");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("He is a teenager");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("He is a adult");
}
else if (personAge == 65) {
    console.log("He is an elder");
}
