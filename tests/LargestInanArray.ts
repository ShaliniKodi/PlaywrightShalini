let arrlarge:number[] = [55,85,16,105,200,12];
console.log("Largest number in the array is: ");
function largestnumber(){
    let largest = arrlarge[0];
for(let i=1;i<arrlarge.length;i++){
    if(arrlarge[i]>largest){
        largest = arrlarge[i];
    }
}
    return largest;
}
console.log(largestnumber());
