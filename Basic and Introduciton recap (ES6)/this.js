class Person{
    constructor(name,age){
        this.name = name ;
        this.age = age ;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }

    

}

const kodom = new Person('kodom ali',20);
console.log(kodom);
kodom.sleep();
kodom.activity();

