const odds_number = [1,3,5,7,9];
const even = [ ];
//loop
for(const num of odds_number){
    even.push(num+1);
}
console.log(even)

// map
const evens = odds_number.map(num => num+1);
console.log(evens);