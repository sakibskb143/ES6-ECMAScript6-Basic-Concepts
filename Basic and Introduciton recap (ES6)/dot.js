// Dot notation vs bracket notation


const person = {
    name: 'kodom ali',
    job: 'badam khai',
    3 : 'third',
    'add-adress' : 'nothing'
}

const prop = 'job';
console.log(person.job)
console.log(person['job'])
// console.log(person.3) its not possible to access.
console.log(person['3'])