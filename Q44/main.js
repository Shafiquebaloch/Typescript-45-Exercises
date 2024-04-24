function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making Sandwich");
    items.forEach(function (item) { return console.log(item); });
}
//Calling the function three times with argumennts.
makeSandwich("Butter", "cheese", "Eggs \n");
makeSandwich("Chicken", "Tamoto", "bread", "Mayo \n");
makeSandwich("Beef", "butter", "Eggs", "bread");
