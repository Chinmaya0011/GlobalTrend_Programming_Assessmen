//Q-Write a function that generates the first n numbers of the Fibonacci sequence.

function fibonacci(n){
let seq=[0,1];

for(let i=2;i<n;i++){
    let nextFib=seq[i-1]+seq[i-2];
    seq.push(nextFib);
}
return seq.slice(0,n);


}
console.log(fibonacci(10))

