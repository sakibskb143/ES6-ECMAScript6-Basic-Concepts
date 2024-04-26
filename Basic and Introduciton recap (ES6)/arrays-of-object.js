const products = [
    {id: 1 , name: 'lenovo', price:65000},
    {id: 2 , name: 'dell', price:45000},
    {id: 3, name: 'hp', price:40000},
    {id: 4 , name: 'mac', price:150000}
]

// map 
 const names = products.map(product => product.name);
//  console.log(names);
const price = products.map(product => product.price);
// console.log(price)

// forEach 
const name = products.forEach(names => console.log(names) )

// filter
const expensives = products.filter(product => product.price > 45000);
console.log(expensives);

//find 
const id = products.find(product => product.id > 2);
console.log(id);

// reduce 
const sum = products.reduce((accumatator,current) => accumatator + current.price,0);
console.log(sum);