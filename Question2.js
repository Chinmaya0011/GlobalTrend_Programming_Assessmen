//Q-Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.

function evaluate(str){
    let str1=str.replace(/\s+/g,"");
    let total=0;
    let currentNumber="";
    let sign=1;

    for(let i=0;i<str1.length;i++){
        const char=str1[i];

        if(char==='+'){
            total+=sign*parseInt(currentNumber,10);
            currentNumber='';
            sign=1;
        }
        else if(char==='-'){
            total+=sign*parseInt(currentNumber,10);
            currentNumber='';
            sign=-1;
        }
        else{
            currentNumber+=char;
        }
    }
    if(currentNumber!==''){
        total+=sign*parseInt(currentNumber,10);
    }
    return total;
}
console.log(evaluate("1+3"))