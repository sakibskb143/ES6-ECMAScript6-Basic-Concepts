const glass = {
    name : 'glass',
    color : 'blue',
    price : 12 ,
    isCleaner : true 
}

const keys = Object.keys(glass);
console.log(...keys)
const value = Object.values(glass)
console.log(...value)

// for pair use entries
// two dimontial array

const pair = Object.entries(glass);
console.log(pair);
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'blue' ],
//     [ 'price', 12 ],
//     [ 'isCleaner', true ]
//   ]

// delete glass.isCleaner ;
// console.log(glass)
const {isCleaner,...shortglass} = glass ;
// freeze
 Object.freeze(glass)
//Object.seal(glass)
glass.source = 'Bangladesh';
glass.price = 500 ;
console.log(glass)
// console.log(shortglass)
