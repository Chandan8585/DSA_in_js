function printOneToN(n){
  if(n<=0){
    return 0;
  }
//   console.log(n);
  printOneToN(n-1);
  console.log(n);

}

const n=10;
printOneToN(n);