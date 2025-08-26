var chunk = function(arr, size) {
    if (arr.length === 0) return arr;

    let chunkedArray = [];
    
    for (let i = 0; i < arr.length; i += size){
        chunkedArray.push(arr.slice(i, i + size));
    }
    
    return chunkedArray;
};