let num1 = 5 ;
let num2 = 10 ;

function makeMovie(a,b){
    a = 7 ;
    return a*b ;
}

console.log(num1)
console.log(makeMovie(num1,num2));
console.log(num1);// here value will not change .value will change only inner scope.

// when we pass the reference(non-primitive(object or array)) and change the values inside the function(inner scope) . value will change for outer scope.
const couple1 = { name:'jalil',parter: 'borsha'};
const couple2 = {
    name:'raj' ,parter:'pori'
};

function makeCouple(c1,c2){
    c1.name='ami toh roja';
    c2.parter='kaj shesh akn new lagbe.'
}

console.log(couple1,couple2);
makeCouple(couple1,couple2);
console.log(couple1,couple2);

function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));