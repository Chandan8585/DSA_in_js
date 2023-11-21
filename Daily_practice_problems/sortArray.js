// Problem Statement: Rearrange the array such that the first half is arranged in increasing order, and the second half is arranged in decreasing order

// Examples:

// Example 1:
// Input: 8 7 1 6 5 9
// Output: 1 5 6 9 8 7
// Explanation: First three elements are in the ascending order and next three elements are in the descending order.


let Input = [8, 7, 1, 6, 5, 9]
// let max = 0;
// let res = [];
const ascendingNumbers = (arr)=>{
         for(let i=0; i<arr.length ; i++){
            let swapped = false;
            for(let j=0; j< i ; j++){
                if(arr[i] < arr[j]){
                    let temp = arr[i];
                    arr[i] = arr[j]
                    arr[j] = temp; 
                    swapped = true;
                }
            }             
            if(!swapped){
                break;
            }
         }
         return arr;
}

console.log(ascendingNumbers(Input));