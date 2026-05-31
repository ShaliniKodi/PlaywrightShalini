class Shape{
    draw():void{
        console.log("Example for drawing");
    }
}
class Circle extends Shape{
    draw():void{
        console.log("Circle Drawing");
    }
}
const cirobj = new Circle();
console.log(cirobj.draw());
const shobj = new Shape();
shobj.draw();