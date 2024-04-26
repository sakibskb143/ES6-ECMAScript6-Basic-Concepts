// arguments is array like object
function sum(a,b,c){
    console.log(arguments);
    const arg = [...arguments];
    console.log(arg)
    const result = a + b + c ;
    return result ;
        }

const total = sum(34,64,75,45 ,37);
console.log(total);
console.log(sum.length)
