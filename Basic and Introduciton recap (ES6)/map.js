const numbers = [2 , 4,3,5,10];

function doubleIt(a){
    const double = a * 2 ;
    return double ;
}

const result = numbers.map(doubleIt);
console.log(result);

const double = x => x * 2 ;
const answer = numbers.map(double);
console.log(answer);
const ans = numbers.map(x => x*3);
console.log(ans);





// const double = [];
// for(const num of numbers){
//     const doubleIt = num * 2 ;
//     double.push(doubleIt);

// }
// console.log(double);