// Example 1:
// Input: arr[] = {10,5,10,15,10,5};
// Output: 10  3
// 	 5  2
//         15  1
// Explanation: 10 occurs 3 times in the array
// 	      5 occurs 2 times in the array
//               15 occurs 1 time in the array



/* Ist Method 
*/
// let Input = [10, 5, 10, 15, 10, 5];
// let result = {};
// const frequencyOfEachElement = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0; // Reset count for each element
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }
//         result[arr[i]] = count;
//     }
//     return result;
// }

// console.log(frequencyOfEachElement(Input));



/* Second Method*/
let Input = [10, 5, 10, 15, 10, 5];
let result = {};
const frequencyOfEachElement = (arr) => {
    let count = 0;
  arr.sort();
  for(let i=0; i<arr.length ; i++){
    if(arr[i]===arr[i+1]){
        count++
    }
    result[arr[i]] = count
  }
 return result
}

console.log(frequencyOfEachElement(Input));

