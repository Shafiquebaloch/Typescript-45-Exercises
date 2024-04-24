function cityName(City, country) {
    if (City === void 0) { City = "Islamabad"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("The ".concat(City, " is a Beautiful city of ").concat(country));
}
//Calling The function with Default values
cityName();
//Changing the values
cityName("Sanghar");
//Changing the values of city and Country also
cityName("istanbul", "Turkey");
