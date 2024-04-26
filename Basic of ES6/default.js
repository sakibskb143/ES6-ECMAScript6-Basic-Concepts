
// default ---> if value is not provided, take this as a default parameters.
function add(num1 , num2=0){
   const result = num1 + num2 ;
   console.log(num1,num2,result);
   return result;

}
// const sum = add(5,7);
// const sum = add(5);
 //const sum = add(5);
const sum = add(1,4);

function name(firstN = '', secondN=''){
    const fullN = firstN + ' ' + secondN ;
    console.log(fullN);
    return fullN ;
}

// const myName = name('Md.',' Sakib');
const myName = name('Md. ', 'Sakib');

function arr(arrs=[]){

}

function objects(obj={}){

}