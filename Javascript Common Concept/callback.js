function getting(greetingHandler,name){
  greetingHandler(name);
}

function greetingHandler(name){
    console.log("Good morning ",name);
}
function greetEvening(name){
    console.log("Good evening.",name);
}

getting(greetingHandler ,'Rasel');
getting(greetingHandler ,'Rohim');
getting(greetEvening ,'sakib');
