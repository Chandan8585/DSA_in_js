function square(number){
    return number**2;
}

function cube(number){
    return number**3;
}

let arrReal = [1,2,3,4,5];

function powerArr(wrapper,arrReal){

let sampleArr =[];

for(let number of arrReal){
sampleArr.push(wrapper(number))
}
return sampleArr;
}
console.log(arrReal);
const sqaureArr = powerArr(square,arrReal);
console.log(sqaureArr)

const cubeArr = powerArr(cube,arrReal);
console.log(cubeArr);
