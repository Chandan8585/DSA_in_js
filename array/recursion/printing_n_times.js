const word = "chandan";
const n= 2;
function printingString(n, word){

    if(n <1){
        return ;
    }
    console.log({word, n});
    printingString(n-1, word);
   
    
}

printingString(n, word);