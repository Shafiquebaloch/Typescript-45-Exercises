//Equality & Unequality Test on strings
var Name1 = "Shahid";
console.log("Name is Shahid", Name1 == "Shahid");
//unequality
console.log("Is Name is Not shahid", Name1 != "Shahid");
//to lower Case
var country1 = "PAKISTAN";
console.log("country is pakistan", country1.toLowerCase() == "Pakistan");
console.log("Country Is Not Pakistan", country1.toLowerCase() != "Pakistan");
//Numerical Values Test
var a = 20;
//Equal to
console.log("is a is equal to 20", a == 20);
//Is not equal to
console.log("is a is not equal to 20", a != 20);
//greater than
console.log("is a is greater than  10", a > 10);
//less than
console.log("is a is less than 15", a < 15);
//Greater than or equal to
console.log("is a is equal to or greater than 20", a >= 20);
//less than or Equal to
console.log(" is a is equal to or less than 77", a <= 77);
//AND operator
console.log("Checking that 20 is greater than 15 and 20 is less than 25");
console.log("Using and operator", a > 15 && a < 25); //when all condition will true than result will true.
console.log("Using and operator", a != 5 && a > 80); //result will be false because one condition is faslse
//Using or operater
console.log("using OR operator", a < 25 || a > 40); //if any conditition will true than result will true.
console.log("using OR operator", a > 30 || a < 20); //if all condition is false than result will false.
//including test
var colors = ["Red", "Green", "purple", "white", "blue"];
console.log("Checking that blue color is present in colors ", colors.includes("blue"));
console.log("Checking that black color is present in colors ", colors.includes("black"));
