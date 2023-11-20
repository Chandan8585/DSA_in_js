const str = "987654321";
const num = 6;


function MaskCharacters(str, num){
  const result =  str.slice(0, str.length-num) + "#".repeat(num) ;
  return result;
}

console.log(MaskCharacters(str, num));