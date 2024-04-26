const max = Math.max(3,5,3,6,6,4,7,34);
console.log(max);
const numbers = [3,5,6,34,75,23,75,45];
const maxArray = Math.max(...numbers);
console.log(...numbers);
console.log(maxArray);

// use spread operator to copy 
const friends = [2 ,4,6,7,3,9];
const bondhu = friends ;
const dosto = [...friends];
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);
// console.log(friends);

// advance 
const advanceSpread = [...friends,999];
console.log(advanceSpread);

// spread operator indicates tree dot(...)
