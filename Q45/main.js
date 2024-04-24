//Making Function to craete a car  object
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Car object
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //additional features to ther object of car
    options.forEach(function (Option) {
        var _a = Option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Calling function to create a car object.
var myCar = create_car("Kia", "sportage", "Transmission:Auto", "color:Silver", "Engine:2.8");
console.log(myCar);
