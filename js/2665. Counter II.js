var createCounter = function(init) {
    let initValue = init;

    let incrementFn = function(){
        return ++initValue
    }
    let decrementFn = function(){
        return --initValue;
    }
    let resetFn = function(){
        initValue = init;
        return initValue;
    }
    return {
        increment: incrementFn,
        decrement: decrementFn,
        reset: resetFn
    }
};