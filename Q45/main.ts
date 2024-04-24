//Making Function to craete a car  object
function create_car(manufacturer, model, ...options){
  //Car object
  let car ={
    manufacturer:manufacturer,
    model:model
  }
;
 //additional features to ther object of car
options.forEach(Option => {
  let [key, value]=Option.split(":");
  car[key.trim()]=value.trim()



});
return car;
}
//Calling function to create a car object.
let myCar=create_car("Kia", "sportage","Transmission:Auto", "color:Silver", "Engine:2.8")
console.log(myCar);
