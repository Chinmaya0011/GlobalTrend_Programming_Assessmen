//Q-Implement a simple HashMap class with put, get, and remove methods.

function filterEven(arr){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(filterEven([1,2,3,4,5,6]))