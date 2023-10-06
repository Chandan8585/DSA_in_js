/**
 * Question 1: Sum Of All natural Number from 1 to n.
*/
// function sumOfNaturalNumber(num){
//     let sum = 0;
//     for(let i=1; i<= num; i++){
//        sum += i;
//     }
//     return sum;
// }
// console.log(sumOfNaturalNumber(10));


/*
Optimisation
*/

function sumOfNaturalNumber(num){
    
    
    return (num)*(num+1)/2;
}
console.log(sumOfNaturalNumber(10));
