
function remDupli(arr){
    let result=[];
    let seen={};
    for(let i=0;i<arr.length;i++){
        if(!seen[arr[i]]){
           result.push(arr[i]);
           seen[arr[i]]=true
        }
       
    }
    return result;
}
console.log(remDupli([1,2,3,4,5,2,5]))