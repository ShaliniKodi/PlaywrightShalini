let num:number=5
function fibonacci(){
let first = 0;
let second = 1;
for(let i=0;i<=num;i++){
    console.log(first);
    let next = first + second;
    first = second;
    second = next;
}
}
console.log(fibonacci())
