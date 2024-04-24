//Making Array Of Numbers
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Using For-loop.
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var oneNumber = nums_1[_i];
    var ordinalValues = void 0;
    if (oneNumber === 1) {
        ordinalValues = 'st';
    }
    else if (oneNumber === 2) {
        ordinalValues = "nd";
    }
    else if (oneNumber === 3) {
        ordinalValues = "rd";
    }
    else {
        ordinalValues = "th";
    }
    console.log("".concat(oneNumber).concat(ordinalValues));
    /*
    This is another Way to Print.
    console.log(oneNumber+ordinalValues);
    */
}
