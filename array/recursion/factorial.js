const n = 4;
// const res = 1;
function factorial(n, res){
    if(n<1){
        return res;
        
    }

   return factorial(n-1, res*n);
    
}
const result = factorial(n, 1);
console.log(result);