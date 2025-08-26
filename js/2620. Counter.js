let num = 1
function createCounter(n) {
    return function counter(){
        num += 1;
        return num > 1 ? n++ : n;
    }  
}



const counter = createCounter(10);
counter() 
counter() 
counter() 