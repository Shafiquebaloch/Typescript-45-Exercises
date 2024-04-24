//Creating Function
function make_Tshirt(size, textMessage) {
    return ("The size you selected is ".concat(size, " and the message on shirt is ").concat(textMessage));
}
//Calling a function
var shirt = make_Tshirt("Small", "ShafiQue Baloch");
console.log(shirt);
