let strarray: string = "aabbccddeefl";
function firstnonrepeachar(){
      for(let i=0;i<strarray.length;i++){
      let count = 0;
      for(let j=0;j<strarray.length;j++){
        if(strarray[i]===strarray[j]){
        count++;
        }
        if(count===1){
            return strarray[i];
        }
      }  
      return null;

    }
    console.log(firstnonrepeachar());

}