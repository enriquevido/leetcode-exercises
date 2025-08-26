var cancellable = function(fn, args, t) {
    fn(...args);

    interval = setInterval(() => {
        fn(...args);
    }, t);

    return () => {
        clearInterval(interval);
    }
};