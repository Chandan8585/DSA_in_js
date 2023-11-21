
const brr = [1, 1, 2, 2, 2, 3, 3, 8, 9];

// const removeDuplicate = (arr)=> {
//     let set = new Set(arr);
//     let uniqueArray = Array.from(set);
// return uniqueArray;
// }

const removeDuplicate = (arr)=> {
    let i=0;
    
    for(let j=0; j<arr.length ; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
       
     }  return i + 1
}


  let k = removeDuplicate(brr);



  for(let i=0 ; i<k ; i++){
    console.log(brr[i] )

  }
  

