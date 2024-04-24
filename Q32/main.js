//Making array for Current Users
var current_users = ["Zulfiqar", "Sultan", "Aijaz", "Rahim", "Noor Muhammad"];
//Making Array for New Users
var new_users = ["Sahil", "Sultan", "Sarfraz", "Rahim", "Akhter"];
new_users.forEach(function (newUser) {
    //using if for checking the new users Name
    if (current_users.some(function (current_user) { return current_user.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("Dear ".concat(newUser, ", You should need to enter a new user name"));
        //using else 
    }
    else {
        console.log("Dear ".concat(newUser, ", User Name is available"));
    }
});
