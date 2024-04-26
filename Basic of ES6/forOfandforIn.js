// for of use on array or string not in object
// for in use on object

const numbers = [2,3,4,5,6,7];
for(const num  of numbers){
    // console.log(num);
}
const str = "Happy coding!!";
for(const char of str){
    // console.log(char);
}

const glass = {
    name : 'glass',
    color : 'blue',
    price : 12 ,
    isCleaner : true 
}
for (const obj in glass){
    console.log(obj);
}
const keys = Object.keys(glass);
console.log(keys)
for(const key of keys){
    console.log(glass[key])
    console.log(key);
}