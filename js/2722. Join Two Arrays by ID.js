var join = function(arr1, arr2) {
    let joined = {};
    let arr = [...arr1,...arr2];
    for (let obj of arr) {
        let id = obj.id;
        if(joined[id]) {
            joined[id] = {...joined[id], ...obj}
        } else {
            joined[id] = obj;
        }
    }

    return Object.values(joined);
};