// const word = "Find the occurence of Character in the String"
const word = "Find the occurrence of Character in the String";
// const charCount = {};

// // Loop through the string and count occurrences of each character
// for (let char of word) {
//     // Remove whitespace and convert to lowercase for case-insensitive counting
//     const cleanedChar = char.trim().toLowerCase();
    
//     // Check if the character is a letter
//     if (cleanedChar >= 'a' && cleanedChar <= 'z') {
//         charCount[cleanedChar] = (charCount[cleanedChar] || 0) + 1;
//     }
// }

// // Print the character counts
// for (let char in charCount) {

//     console.log(`Character '${char}' occurs ${charCount[char]} times.`);
// }


let charCount = {};
for(let char of word){
    let cleanedChar = char.trim().toLocaleLowerCase();
    if(cleanedChar >= 'a' && cleanedChar <= 'z'){
         charCount[cleanedChar] = (charCount[cleanedChar]|| 0) + 1;
    }
}
    for(let char in charCount){
        console.log(`Character '${char}' occurs ${charCount[char]} times.`);
    }

