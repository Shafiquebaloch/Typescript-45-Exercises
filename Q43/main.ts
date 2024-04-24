//Defining array
let magicansNames=["Sahil", "sarfraz", "asad"];

//Making function to print Magicians Name
function show_Magicians(megicians:string[]) {
   megicians.forEach(name=>console.log(name))
}
//Function to Modify our array,
function make_great(magicans:string[]){
    return magicans.map(name=> `The Great ${name}`)
}
//Making copy of original array through slice() function.

let copy_magicians=magicansNames.slice()



//Modifying the  copied array including THE GREAT with Names.
let copy_great_magicians=make_great(copy_magicians)


//printing both original array and modified array.
console.log("Original array \n");

show_Magicians(magicansNames)


console.log("Copied Array \n");

show_Magicians(copy_great_magicians)