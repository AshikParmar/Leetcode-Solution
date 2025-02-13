/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var minOperations = function (nums, k) {
//     nums.sort((a,b)=> a-b)
//     let numberOfOperation = 0;

//     while(nums[0]<k){
//         let x = nums.shift();
//         let y = nums.shift();
//         nums.push(x*2 + y);
//         nums.sort((a,b)=> a-b);
//         numberOfOperation++;
//     }

//     return numberOfOperation;
// };

const minOperations = (a, k) => {
    a.sort((x, y) => x - y);
    const b = [];
    for(let i = 0, j = 0, count = 0, x, y; ; ++count) {
        if (i < a.length && !(a[i] > b[j])) x = a[i++];
        else x = b[j++];
        if (!(k > x)) return count;
        if (i < a.length && !(a[i] > b[j])) y = a[i++];
        else y = b[j++];
        b.push(x * 2 + y);
    }
    
};

let nums = [2,11,10,1,3];
let k = 10;

console.log(minOperations(nums,k));