/* 
Que: Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.
*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = [];

    for(let i=0; i<arr.length; i+=size){
        result.push(arr.slice(i, i+size));
    }
    // let temp = [];
    // arr.forEach((item,idx)=>{
    //     temp.push(item);
    //     if(temp.length === size){
    //         result.push(temp);
    //         temp = [];
    //     }
        
    // })
    
    // if(arr.length%size !== 0){
    //     result.push(temp);
    // }

    return result;
};

console.log(chunk([1,2,3,4,5],3));

