const palin: string = "level";
function PalindromeEx(){
    let reverse = "";
    for(let i=palin.length-1;i>=0;i--){
        reverse = reverse + palin.charAt(i);
        }
    if(palin===reverse){
     console.log("Given string is a palindrome");
    }
     else{
     console.log("Given string is not palindrome");
     }   
     console.log(reverse); 

    }
     
    console.log(PalindromeEx());
    

    
