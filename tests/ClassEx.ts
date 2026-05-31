class calculator{

   add(a:number,b:number):number{
    return a + b;
   }
   multiply(a:number,b:number){
    return a*b;
   }
}
   
   let calc  = new calculator();
   console.log("Addition is: "+ calc.add(10,20));
   console.log("Multiplication is: " +calc.multiply(30,2));

