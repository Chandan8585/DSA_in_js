
// Problem Statement: Given an integer N , write program to count number of digits in N.


let digit = 1242;
let x = Number(digit);
let count = 0;
while(x !=0 ){
    x = Math.floor(x / 10);
    count ++;

}
        
console.log(count);