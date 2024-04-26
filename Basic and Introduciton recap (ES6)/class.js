class teacher{

    constructor(name,subject){
        this.name = name ;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math.');
    }


}

const tapon = new teacher('Tapon sir','Physics');
console.log(tapon);
console.log(tapon.lecture())