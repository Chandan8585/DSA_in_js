const n =4;
// let sum = 0;
function PrintNumber(n, sum){

    if(n<1){
        console.log(sum);
        return ;
    }
  
PrintNumber(n-1, sum+n);
    
}
PrintNumber(n, 0);

