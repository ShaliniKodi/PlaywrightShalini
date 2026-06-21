const str2:string = "Allam Bellam";
function nonrepeatingcharcater(){
for(let i=0;i<str2.length;i++){
    let count = 0;
for(let j=0;j<str2.length;j++){
if(str2[i]==str2[j]){
    count++;
}
}
if(count===1){
 return str2[i];   
}
}
}

