//Defining array
var magicansNames = ["Sahil", "sarfraz", "asad"];
//Making function to print Magicians Name
function show_Magicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
//Function to Modify our array,
function make_great(magicans) {
    return magicans.map(function (name) { return "The Great ".concat(name); });
}
//Making copy of original array through slice() function.
var copy_magicians = magicansNames.slice();
//Modifying the  copied array including THE GREAT with Names.
var copy_great_magicians = make_great(copy_magicians);
//printing both original array and modified array.
console.log("Original array \n");
show_Magicians(magicansNames);
console.log("Copied Array \n");
show_Magicians(copy_great_magicians);
