const digit = 13;
let isPrime = true;
for(let i=2; i*i<=digit ;i++){
      if(digit% i === 0){
        isPrime = false;
      }
    
}
if(isPrime== true){
    console.log("Number is prime");
}
else{
    console.log("Number is not a prime");
}