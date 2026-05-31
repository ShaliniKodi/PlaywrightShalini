import { reverse } from "node:dns";
const str: string = "My Name is Kodi Shalini";
function reverseString(){
   let reverse = ""; 
  for(let i=str.length-1;i>=0;i--){

    reverse = reverse + str[i];
  
 }
  return reverse; 
 //console.log(reverse);
}  
console.log("Original string is:" +str );
console.log("Reverse string is: " + reverseString());




