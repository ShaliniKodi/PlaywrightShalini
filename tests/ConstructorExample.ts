class chiranjeevi{
    cashinswiss : number=100;
    propertyOne():void{
        console.log('Kokapet Farm House');        
    }
}
    class ramcharan extends chiranjeevi{
    cashinswiss : number=200;
    propertyOne():void{
        super.propertyOne();
        console.log('Apollo Hospital');        
    }

}
let chiran = new chiranjeevi();
let ram = new ramcharan();
console.log(chiran.cashinswiss);
console.log(ram.cashinswiss);
ram.propertyOne();

