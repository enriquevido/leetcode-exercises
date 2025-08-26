var timeLimit = function(fn, t) {

    return function(...args) {
        const promise = [
            new Promise(resolve => resolve(fn(...args))),
            new Promise((_, reject) => setTimeout(() => reject('Time Limit Exceeded'),t)),
        ]
        return Promise.race(promise);
    }
};