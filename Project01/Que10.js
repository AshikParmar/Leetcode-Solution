/*
Que: Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

1] The first time the returned function is called, it should return the same result as fn.
2] Every subsequent time it is called, it should return undefined. 
*/

let once = function(fn) {
    let called = false;
    return function(...args){
        if(!called){
            called = true;
            return fn(...args);
         }else{
            return undefined;
         }
    };
};


 let fn = (a,b,c) => (a + b + c);
 let onceFn = once(fn)

 let r = onceFn(1,2,3);     // 6
 let b = onceFn(2,3,6);     // returns undefined without calling fn
 console.log(r,b); 
