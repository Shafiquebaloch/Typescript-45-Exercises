//Making Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "My Beautiful Shirt"; }
    console.log("Making a ".concat(size, " shirt with the ").concat(printMessage, " words on shirt"));
}
//calling the function with by default values
make_shirt();
//Now calling the function with New values ignoring the default values
make_shirt("small", "Black shirt");
