const arr = [2, 5, 21, 43, 122];

function reverse(arr){
    if(arr.length === 0){
        return [];
    }

    return [arr[arr.length - 1], ...reverse(arr.slice(0, arr.length - 1))]
    // reverse(arr.slice(0, arr.length -1 ));
    
   

}

const rev = reverse(arr);
console.log(rev);