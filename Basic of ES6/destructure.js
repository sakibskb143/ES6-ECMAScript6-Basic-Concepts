const actor = {
    name : 'sakib',
    age  : 30 ,
    phone : '',
    money : 234232243
}

// const phone = actor.phone ;
// const age = actor.age ;

// destructure way
// if right side is an object left side of destructuring will be object as well. 

//const {phone,age:boyos} = actor

// use property name as a variable that contains the property value 
const {phone='ami jani na ki hoscha',age:boyos} = actor
console.log(actor)

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
//console.log(actor.phone)
// console.log(age)
// console.log(age)
console.log(boyos)



// array destructuring
const numbers = [45,99];
const [first, second] = numbers ;
// console.log(first);
const [x,y] = [12,34];
// console.log(x,y);


function doubleThem(a,b){
    return [a*2, b*2];
}
const [prothom,ditiyo] = doubleThem(6,9);
console.log(prothom,ditiyo);

const arrowFunction = (a, b) => [a * 3, b * 3];
const [arrowFirst, arrowSecond] = arrowFunction(2, 5);
console.log(arrowSecond, arrowFirst);
