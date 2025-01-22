/*
Que:Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 */


let addTwoPromises = async function(promise1, promise2) {
    let ans = await(promise1)+await(promise2);

    return ans;
};


//  var addTwoPromises = async function(promise1, promise2) {
//   // Wait for both promises to resolve and retrieve their values
//   const [value1, value2] = await Promise.all([promise1, promise2]);

//   // Return a new promise that resolves with the sum of the values
//   return value1 + value2;
// };

let promise1 = new Promise(resolve => setTimeout(() => resolve(), 20));
let promise2 = new Promise(resolve => setTimeout(() => resolve(), 60));

addTwoPromises(Promise.resolve(2), Promise.resolve(5))
.then(console.log); // 4
