const difference = (a,b) => a - b ;
const multify = (first ,second,third) => first * second * third ;


// single parameter or one parameter
const getAge = (person) => person.age ;
//implicix return
const students = {
    name:'sakib',age:39
};
const age = getAge(students);
console.log(age);

const getthird = Numbers => Numbers[2];
const third = getthird([6,2,34,9,4]);
console.log(third);

// no parameter
const getPI = () => Math.PI ;
console.log(getPI());

// large arrow function , if you want to get anything returned from this function , then you have to use the return keyword 
const doMath = (x,y,z) => {
    const sum = x + y + z ;
    const mult = x * y * z ;
    const result = sum + mult ;
    return result ;
}
console.log(doMath(2,3,5));