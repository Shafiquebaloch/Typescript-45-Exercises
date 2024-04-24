var users = ["Shafique", "Admin", "Arshad", "Kashif", "Asim"];
users.forEach(function (user) {
    if (user === "Admin") {
        console.log("Hello ".concat(user, ", would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(user, ", Thanks for loging in again"));
    }
});
