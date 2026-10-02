import {test,expect} from '@playwright/test';
test('abstraction example', async ({page})=>
{
abstract class Animal{
    abstract eat():void;
    display():void
    {
    console.log("Animal makes sound");        
}
}
class Dog extends Animal{
   eat():void{
   console.log("Dog is eating");
}
}
const c = new Dog();
c.display();
c.eat();
});

