//Defining array
let magicansName=["Sahil", "sarfraz", "asad"];

//Making function to print Magicians Name
function show_Magicians(megicians:string[]) {
   megicians.forEach(name=>console.log(name))
}
//Function to Modify our array,
function make_great(magicans:string[]){
    return magicans.map(name=> `The Great ${name}`)
}
//Calling functuons
let GreatMagicians= make_great(magicansName);
console.log(GreatMagicians);
