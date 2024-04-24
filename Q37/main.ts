//Making Function
function make_shirt(size: string="large", printMessage:string="My Beautiful Shirt"){
    console.log(`Making a ${size} shirt with the ${printMessage} words on shirt`);
    
}
//calling the function with by default values
make_shirt();


//Now calling the function with New values ignoring the default values
make_shirt("small", "Black shirt")