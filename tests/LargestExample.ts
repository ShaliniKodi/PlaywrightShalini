const arrnum:number[] = [55,66,12,33,17,89,15];
function findlargest(){
  let largest = arrnum[0];  
for(let i=1;i<arrnum.length;i++){
  if(arrnum[i]>largest){
    largest=arrnum[i];
 }   
}
return largest;
}
console.log(findlargest())