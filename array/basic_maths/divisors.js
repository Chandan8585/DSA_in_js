const digit = 12;
const divisor = [];
for(let i=0; i<digit ; i++){
    if(digit%i=== 0){
        divisor.push(i);
    }
}
console.log(divisor.join(" "));