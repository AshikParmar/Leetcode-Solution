/* 
Que: Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

1) increment() increases the current value by 1 and then returns it.
2) decrement() reduces the current value by 1 and then returns it.
3) reset() sets the current value to init and then returns it.
*/


let createCounter = function(init) {
    let n = init;
    return {
        increment: ()=>{
            return ++n;
        },
        decrement: ()=>{
            return --n;
        },
        reset: ()=>{
            n = init;
            return n;
        }
    }
    
};


const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

console.log(counter.reset());