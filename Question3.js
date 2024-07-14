
//Q-Write a function that takes a nested array and returns a flattened array.

function flattened(arr){
    return arr.flat(Infinity)
}
console.log(flattened([[1,2],[3,4],[5,6],[7,8]]))