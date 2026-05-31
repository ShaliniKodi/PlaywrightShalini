//String Operations in TypeScript
 
let msg: string = "I love PlayWright";//
console.log(msg.length); // 21
 
console.log(msg.indexOf("love"));  // 2
console.log(msg.replace("PlayWright", "AI"));// "I love AI"
 
const msg1: string = "123456789";
console.log(msg1.substring(2, 6)); // "3456"
 
console.log(msg.toUpperCase()); // "I LOVE PLAYWRIGHT"
console.log(msg.toLowerCase()); // "i love playwright"
console.log(msg.substring(3, 7)); // "love"
 
console.log(msg[5]);    // "o"
console.log(msg.charAt(0));// "I"
 
let res = msg.split(" ");// deeni output anedi Array
console.log(res); // Output: ["i", "love", "PlayWright"]
 
let strarry: string[] = ["I", "love", "PlayWright"];
 