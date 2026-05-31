class Vehicle{
    applyBreak():void{
        console.log("Apply breaks in a vehicle");
    }
}
class Car extends Vehicle{
    applyBreak():void{
     console.log("Apply breaks on a car");
     console.log(super.applyBreak());
    }
}
const carobj = new Car();
carobj.applyBreak();