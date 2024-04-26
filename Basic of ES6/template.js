const a = 10 ;
const b = 20 ;
const result = 'The sum of '+ a + ' and ' + b + ' is ' + (a + b );
console.log(result);

// const backtick = `The sum of ${a} and ${b} is ${a+b}`;
const students = [45,47,98,76];
const arr = {name: 'sakib',age : 5};
const backtick = `The sum of ${students[0]} and ${arr.age} is ${a+b}`;


console.log(backtick)

const para = 'I am sick \n' + 'I have cold fever.\n' + 'Thats why  i am sleeping';
const backtickString = `I am sick
I have cold fever .
that's why i am sleeping .`
console.log(backtickString);
console.log(para);