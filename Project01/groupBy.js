/*
Que: Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.
*/

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let result = new Object;

    this.forEach((item)=>{
        let id = fn(item)
        if(result.hasOwnProperty(id)){
            console.log(result[id])
            result[id].push(item);
        }else{
            result[id] = [item];
        }
    })

    return result;

    
    //  return this.reduce((acc, cur) => {
    //     const key = fn(cur)
    //     if (!acc[key]) {
    //         acc[key] = []
    //     }
    //     acc[key].push(cur);
    //     return acc
    // }, {})
};

let array = [{"id":"1"},{"id":"1"},{"id":"2"}];

 const fn = function (item) { return item.id; }
  console.log(array.groupBy(fn) )// {"1":[1],"2":[2],"3":[3]}
 