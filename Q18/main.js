var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//favorite locations
var locations = ["Istanbol", "Rome", "Switzerland", "Naran Kaghan", "Chotiyari Dam"];
console.log('Original order', locations);
//printing the array in alphabatical order.
console.log("Alphabetical order", __spreadArray([], locations, true).sort());
console.log('Still in original order', locations);
//printing the array in reverse order
console.log("Reverse order", __spreadArray([], locations, true).reverse());
console.log("Your array is still in original order:", locations);
//Reverse the original array
console.log("Original array reversed", locations.reverse());
//Back to original
console.log("Back to original order:", locations.reverse());
//Printing the array ain alphabatical order
console.log("Sorting the original list in alphabatical order:", locations.sort());
//original array reversed
console.log("reverse original array:", locations.reverse());
