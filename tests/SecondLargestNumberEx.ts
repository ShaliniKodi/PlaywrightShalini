let secondnum:number[] = [34,57,109,99,14,100];
let first=secondnum[0],second=secondnum[0];
for(let i=1;i<=secondnum.length;i++){
if(secondnum[i]>first){
    second = first;
    first = secondnum[i];
}else if(secondnum[i]>second){
 second = secondnum[i];
}
}
console.log(second);

