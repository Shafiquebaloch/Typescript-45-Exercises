//Making the variable:
var Name = "Shafique";
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
console.log(Name.replace(/\b\w/g, function (abc) { return abc.toUpperCase(); }));
