// const instructor = [
//     {name:'Nodi',age:29,position:'Senior'},
//     {name:'akil',age:33,position:'Junior'},
//     {name:'Sakib',age:29,position:'Senior'}
// ] ;
// const display = instructor.filter(pos => (pos.position == 'Senior')? pos.name:null ).filter(Boolean);
// console.log(display);
const instructor = [
    {name:'Nodi', age:29, position:'Senior'},
    {name:'akil', age:33, position:'Junior'},
    {name:'Sakib', age:29, position:'Senior'}
];

// Filter out instructors with position 'Senior' and return only their names
const display = instructor
    .filter(pos => (pos.position == 'Senior') ).map(names => names.name);

console.log(display);
