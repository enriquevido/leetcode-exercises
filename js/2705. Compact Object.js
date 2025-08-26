var compactObject = function(obj) {
    function dfs(obj) {
        if (!obj) return false;
        if (typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) {
            const newArr = [];
            for(let i = 0; i < obj.length; i++) {
                const curr = dfs(obj[i]);

                if(curr) {
                newArr.push(curr);
            }
        }
        return newArr;
    }
    
    const newObj = {};

    for (const key in obj) {
        const curr = dfs(obj[key])
        if (curr) {
            newObj[key] = curr;
        }
    }
    return newObj;
    }
    return dfs(obj);
};