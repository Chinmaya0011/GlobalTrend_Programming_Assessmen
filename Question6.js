
//Q-Write a function that takes a string and capitalizes the first letter of each word in the string.


function captilize(str){
    let str1=str.toLowerCase().split(' ');
    let result="";
for(let i=0;i<str1.length;i++){
    let word=str1[i];
    result+=word.charAt(0).toUpperCase()+word.slice(1)+" ";
}
   return result.trim();
}
console.log(captilize("chinmaya kumar Mishra"))