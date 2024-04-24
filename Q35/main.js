//Creating Array
var animalPet = ["cow", "dog", "goat"];
//Using For-loop.
for (var _i = 0, animalPet_1 = animalPet; _i < animalPet_1.length; _i++) {
    var pet = animalPet_1[_i];
    //Now it will print three times because I have Passed 3 Values.
    console.log("A ".concat(pet, " will make a great pet"));
}
//Print the message outside of for loop
console.log("Any of animal would make a great pet");
