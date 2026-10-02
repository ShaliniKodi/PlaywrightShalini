import {test,expect} from '@playwright/test';
test('inheritance example', async ({page})=>
{
    class Shape{
        draw():void{
            console.log("Shape is drawn")
        }
        display():void{
            console.log("Display method is called")
        }
    }
    class Circle extends Shape{
        draw():void{
           console.log("Circle Shape is drawn") 
        }
        }
        const c = new Circle();
        c.display();
        c.draw();
});