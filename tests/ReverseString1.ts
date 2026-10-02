let strnum:string = "Serave is good lotion";
function revString(){
    let reverse = "";
    for(let i=str.length-1;i>=0;i--){
       reverse = reverse + strnum[i];
    }
    return reverse;
}
console.log("Original String is: " + strnum);
console.log("Original String is: " + revString());
