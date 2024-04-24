//favorite locations
let locations=["Istanbol", "Rome", "Switzerland", "Naran Kaghan", "Chotiyari Dam"]

console.log('Original order', locations);
//printing the array in alphabatical order.
console.log("Alphabetical order" ,[...locations].sort());
console.log('Still in original order', locations);

//printing the array in reverse order
console.log("Reverse order" ,[...locations].reverse());

console.log("Your array is still in original order:", locations);
//Reverse the original array
console.log("Original array reversed", locations.reverse());
//Back to original
console.log("Back to original order:", locations.reverse());
//Printing the array ain alphabatical order
console.log("Sorting the original list in alphabatical order:", locations.sort());
//original array reversed
console.log("reverse original array:", locations.reverse());
