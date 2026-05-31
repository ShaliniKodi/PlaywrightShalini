let arr:number[] = [10,55,56,34,14];
function findLargest() {

    let largest = arr[0];

    for(let i = 1; i < arr.length; i++) {

        if(arr[i] > largest) {

            largest = arr[i];

        }

    }

    return findLargest;

}

console.log(findLargest());