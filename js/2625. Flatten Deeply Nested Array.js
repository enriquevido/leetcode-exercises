var flat = function (arr, n) {
    if (n === 0) return arr;
    let res = [];
    const rec = (arr, depth) => {
        for (const item of arr) {
            if(Array.isArray(item) && depth < n){
                rec(item, depth + 1);
            } else {
                res.push(item);
            }
        }
    }
    rec(arr, 0);
    return res;
};