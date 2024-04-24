//Defining array
var magicansName = ["Sahil", "sarfraz", "asad"];
//Making function to print Magicians Name
function show_Magicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
//Function to Modify our array,
function make_great(magicans) {
    return magicans.map(function (name) { return "The Great ".concat(name); });
}
//Calling functuons
var GreatMagicians = make_great(magicansName);
console.log(GreatMagicians);
