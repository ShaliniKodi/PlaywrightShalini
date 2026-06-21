let arrlar:number[]=[10,18,35,45,100,2];
function largestArray(){
  let largestnum = arrlar[0];  
  for(let i=0;i<arrlar.length;i++){
  //let largestnum = arrlar[0];  
  if(arrlar[i]>largestnum){
    largestnum = arrlar[i];

  }
}
  
  return largestnum;}

console.log('Largest Number in the array is:' + largestArray());