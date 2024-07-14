//Q-Write a function that checks if two given strings are anagrams of each other.



function isAnagrams(str1,str2){
const str11=str1.replace(/\s/g,'').toLowerCase();
const str22=str2.replace(/\s/g,'').toLowerCase();

if(str11.length!==str22.length){
    return false;
}

const sortStr11=str11.split('').sort().join('');
const sortStr22=str22.split('').sort().join('');


return sortStr11===sortStr22;


}

console.log(isAnagrams("did","did"))