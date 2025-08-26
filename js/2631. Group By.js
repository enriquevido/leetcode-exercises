Array.prototype.groupBy = function(fn) {
    const obj = {};
		for (let i = 0; i < this.length; i++){
				const key = fn(this[i]);
				if (obj[key] === undefined){
						obj[key] = [this[i]];
				} else {
						obj[key].push(this[i]);
				}
		}
		return obj;
};