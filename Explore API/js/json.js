const user = {id: 1, name:'sakib' ,job:'student'};


// Javascript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
/*
{ id: 1, name: 'sakib', job: 'student' }
{"id":1,"name":"sakib","job":"student"}
*/

const shop = {
    owner: 'sakib',
    address: {
        street: 'hillview',city: 'chattogram',
        country: 'BD'
    },
    products: ['laptop' , 'mic','monitor','keyboard'],
    revenue: 45000,
    isOpen: 'true',
    isNew: false

}
// converts object / array into string by stringify

const shopJSON = JSON.stringify(shop);
console.log(shop);
console.log(shopJSON);

// coverts Json file to others by Parse
const ShopObj = JSON.parse(shopJSON);
console.log(ShopObj)