const strchar :string = "Tirumala Tirumathi";
function countvowels(){
    let count = 0;
for(let i=0;i<strchar.length;i++){
    let ch = strchar[i];
    
    if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'
     ||ch==='A'||ch=='E'||ch==='I'||ch==='O'||ch==='U'){
    count++;

}
}
return count;
}

console.log(countvowels());
