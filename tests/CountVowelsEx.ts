let str:String="Java Script Programming";

function countvowel(){  
    let count = 0;  
    for(let i=0;i<str.length;i++){
       let ch = str[i];
        if(ch==='A'|| ch==='E'||ch==='I'||ch==='O'||ch==='U'
            || ch==='a'|| ch==='e'||ch==='i'||ch==='u')
    
{
    count++;
}
}
return count;
}
 console.log(countvowel());
