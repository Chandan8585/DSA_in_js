const num1 = 20;
const num2 = 10;

let res;
for(let i=0; i< Math.min(num1, num2); i++){
    if(num1%i=== 0 && num2%i===0){
       res = i;
    }
}
console.log(res);