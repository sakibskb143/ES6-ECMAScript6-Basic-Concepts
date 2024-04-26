

print5();// it's give answer.
print10();// it's give error cz function declare into a variables and when we call it  function can't hoisting above thats why it not work
for(var i = 0 ; i < 5 ; i++){
    console.log(i);
}
console.log('outside', i);
// var hold the value after the loop but let hold the value inside loop when cannot print it.


function print5(){
    console.log("inside print5");
}
// here function automatically hoisting up that when call it above it works.

const print10 = () => console.log("inside print10");
