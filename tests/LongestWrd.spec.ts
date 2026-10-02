const str1:string = "Java Programming";
const words = str1.split("");
let longestword = ""
for(const word of words){
    if(word.length>longestword.length){
        longestword = word;
    }
}
console.log(longestword)