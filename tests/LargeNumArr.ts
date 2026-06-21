let arr3:number[] = [55,85,16,105,200,12];
function largeArray(){
    let largestArray = arr3[0];
    for(let i=0;i<arr3.length;i++){
        if(arr3[i]>largestArray){
            largestArray = arr3[i];
        }
    }
        return largestArray;
    }
console.log("largest array is:" + largeArray());