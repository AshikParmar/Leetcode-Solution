let compose = function(functions) {

    // return function(x) {
    //     let val = x;
    //     for ( let i = functions.length - 1; i>=0; i--){
    //         val = functions[i](val);
    //     }

    //     return val;
    // }



    //SECOND METHOD     
    
     return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
    
};


let functions = [x => x + 1, x => x * x, x => 2 * x];
let x = 4;

console.log(compose(functions)(x));