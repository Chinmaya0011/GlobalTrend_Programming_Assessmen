//Q-Write a function that converts a given string to title case (capitalizing the first letter of each word).
//Q6===Q10

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