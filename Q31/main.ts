//Making array
let userNames=["Shafique", "Admin", "Arshad", "Kashif", "Asim"]
//Removing All elements from array.
userNames=[]
//Checking the length
if(userNames.length === 0){
    console.log("Sorry we need to find some users");
    
}else{
userNames.forEach(userName =>{
    if(userName === "Admin"){
        console.log(`Hello ${userName}, Would you like to see a status report.`);
        
    }else{
        console.log(`Hello ${userName}, Thanks for loging in`);
        
    }
})
}