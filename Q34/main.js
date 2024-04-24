//Creating Array
var pizzas = ["fajita", "Malai cheese"];
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var Pizza = pizzas_1[_i];
    //printing a message inside of loop and it will print two times because i have been passed two values.
    console.log("The ".concat(Pizza, " is my favorite pizza"));
}
//Printing the message outside of for loop Now it will be print one time.
console.log("I Love Pizza");
