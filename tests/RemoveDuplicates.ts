let arrduplicate: number[] = [2,4,5,2,16,5,4];
console.log("Duplicate array emements are: ");
for(let i=0;i<arrduplicate.length;i++){
    for(let j=i+1;j<arrduplicate.length;j++){
      if(arrduplicate[i]==arrduplicate[j]){      
         console.log(arrduplicate[i]);

      } 
      
    }
}