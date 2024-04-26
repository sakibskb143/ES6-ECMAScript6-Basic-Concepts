
// data access

const data = [{id: 1 , name:'sakib',address: 'hillview'}];

// console.log(data.address);
// ans : undefine
console.log(data[0].address)


const products = {
    count: 500 , 
    data: [
        {id:1 , name: 'lenovo laptop',price:65000},
        {id:2 , name: 'macbook' , price: 165000},
    ]
}
// second products price 
console.log(products.data[1].price);


const user = {
    id: 5001,
    name: 'shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
    }
}

// console.log(user.address.street.second);

const user2 = {
    id: 5002 ,
    name : 'pori moni apa bari',
    address:{
        city: 'chittagong',
        country: 'bangladesh'
    }
}
// option chain 
console.log(user.address.street?.second);
console.log(user2.address.street?.second);