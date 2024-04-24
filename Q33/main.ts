//Making Array Of Numbers
let nums=[1,2,3,4,5,6,7,8,9]

//Using For-loop.
for(let oneNumber of nums){
    let ordinalValues:string;
if (oneNumber === 1){
    ordinalValues = 'st'

}  
else if(oneNumber === 2){
    ordinalValues = "nd" 

}  
else if(oneNumber === 3){
    ordinalValues = "rd"
}
else{
    ordinalValues = "th"
}

console.log(`${oneNumber}${ordinalValues}`);
/*
This is another Way to Print.
console.log(oneNumber+ordinalValues);
*/
}