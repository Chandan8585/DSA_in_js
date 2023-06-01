const digit = "pop";
let start = 0;
let end = digit.length-1;
let isPalindrome = true;

while(start<end){
    if(digit[start] != digit[end]){
        isPalindrome = false;
        break;
    }
    else{
        start++;
        end--;
    }
   
}
if(isPalindrome == true){
    console.log("palindrome")
}
else{
    console.log("not a palindrome");
}


