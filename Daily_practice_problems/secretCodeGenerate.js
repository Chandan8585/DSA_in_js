/*
* Generate Secret Code from a given string
*Input --> Prakash
*Encoded By 2 characters
* Output --> rtcmcuj
*/
const str = "Prakash"
function EncodedString(str){
 let encodedStr = "";
 let currentPos = 0 ; 
 let newPos = 0; 
 for(let i=0; i<str.length ; i++){
    currentPos = str.charCodeAt(i);
    newPos = currentPos + 2;
     encodedStr += String.fromCharCode(newPos);
    
 }
     return encodedStr;
}

console.log(EncodedString(str));