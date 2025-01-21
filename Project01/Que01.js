// Que: Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

const greet = createHelloWorld();

console.log(greet("kuch nahi"));
