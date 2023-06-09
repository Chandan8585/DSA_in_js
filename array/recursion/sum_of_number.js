
function PrintNumber(n){
  if(n==0){
    // console.log(sum);
    return 0;
  }


    // PrintNumber(n-1, sum+n);
    return n+ PrintNumber(n-1);
   

}
const n =4;
const sum = 1;
console.log(PrintNumber(n));

