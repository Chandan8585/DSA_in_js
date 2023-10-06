/*
Count the number of digits of a number
*/
function countTheNumberOfDigits(num){
//    let sum = 0;
//    while(num >= 0){
//     // sum += num;
//        sum += num%10;
//    }
       return num.toString().length;
// return sum;
}

console.log(countTheNumberOfDigits(1843));