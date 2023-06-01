const digit = 153;
const digitString = digit.toString();
let sum = 0;
for(let i=0; i<digitString.length; i++){
    const digitValue = parseInt(digitString[i]);
     sum += digitValue*digitValue*digitValue ;
}
if(sum === digit){
     console.log("Yes it is an ArmStrong number");
}
else{
    console.log("Not an armstrong");
}