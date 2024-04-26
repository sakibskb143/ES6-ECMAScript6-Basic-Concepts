// a closure gives you access to an outer function's scope from an inner function
    
    
    function stopWatch(){
        let counter = 0 ; 
        return function(){
            counter++ ;
            return counter;
        }
    }

    const watch1 = stopWatch();
    watch1();
    watch1();
    watch1();
    const watch2 = stopWatch();
    watch2();
    watch2();
    watch2();