// Arrow function ===> arrow function is one of the features introduced in the ES6 version of Javascript. It allows you to create functions in a cleaner way compared to regular functions.

// Normal function
function add (a , b){
    return a+b ;
}

// function  expression

const sum1 = function(a,b){
    return a+b ;
}

//arrow function 

const sum2 = (a ,b,c) => a + b + c ;
const mult = (a,b) => a * b ;
const multify = mult(3,5);
console.log(multify);
//const sum = add(5,4);
//const sum = sum1(5,4);
const sum = sum2(5,4,2);
console.log(sum);