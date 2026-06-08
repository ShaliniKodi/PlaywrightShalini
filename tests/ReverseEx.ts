import { reverse } from "node:dns";
const strname:string="Mera Naam Joker";
function reverexample(){

  let reverse = "";
  for(let i=strname.length-1;i>=0;i--){
     reverse = reverse + strname[i];
  }
  return reverse;
 
}
console.log("Original string is:"+strname);
console.log("Reverse string is:"+reverexample());




