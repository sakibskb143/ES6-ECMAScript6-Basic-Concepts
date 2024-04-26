const people = [
    {name: 'Meena',age:20},
    {name: 'Raju',age:202},
    {name: 'Munni',age:20}
];
const result = people.reduce((accu,current) => accu+current.age,0);
console.log(result)
// const result = people.map(ages => ages.age ).reduce((accu,current) => accu+current,0);
// console.log(result)
let sum = 0 ;
for(const arr of people){
    sum += arr.age;
}
console.log(sum);

function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);