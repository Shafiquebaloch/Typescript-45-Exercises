//Making array for Current Users
let current_users=["Zulfiqar", "Sultan", "Aijaz", "Rahim", "Noor Muhammad"]
//Making Array for New Users
let new_users=["Sahil", "Sultan", "Sarfraz", "Rahim", "Akhter"]

new_users.forEach(newUser=>
{
    //using if for checking the new users Name
    if(current_users.some(current_user=> current_user.toLowerCase() === newUser.toLowerCase())){
        console.log(`Dear ${newUser}, You should need to enter a new user name`);
        //using else 
    }else{
        console.log(`Dear ${newUser}, User Name is available`);
        
    }
})