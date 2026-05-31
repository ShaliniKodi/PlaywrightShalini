class Rectangle{
    width:number;
    height:number;

   constructor(size:number);
   constructor(width: number, height: number);
   
   constructor(width:number,height?:number){
     this.height= height??width;
     this.width = width;
   }
   area(): number {
    return this.width * this.height;
    }
}
  const square = new Rectangle(5);
  const rect = new Rectangle(5, 10);

  console.log(square.area());
  console.log(rect.area());



