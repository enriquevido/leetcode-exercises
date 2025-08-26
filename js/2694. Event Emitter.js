class EventEmitter {
    constructor() {
        this.obj = {};
    }

    subscribe(eventName, callback) {
        if (this.obj[eventName]) {
            this.obj[eventName].push(callback)
        } else this.obj[eventName] = [callback];

        return {
            unsubscribe: () => {
                this.obj[eventName] = this.obj[eventName].filter(fn => fn!==callback);
                return undefined;
            }
        };
    }
    
    emit(eventName, args = []) {
        if(!this.obj[eventName]) return [];
        return this.obj[eventName].map(fn => fn(...args))
    }
}