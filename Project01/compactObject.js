/*
Que: Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

 */

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {

    let result ={} ;

    for(const key in obj){
        if(typeof(obj[key])==="object" && obj[key]!==null ){
            result[key] = compactObject(obj[key]);
        }else{
            if(Boolean(obj[key])){
                result[key] = obj[key];
            }
        }
    }

    if(Array.isArray(obj)){
        result = Object.values(result);
    }

    

    return result;
/*
    if(typeof obj !== 'object' || obj === null){
        return obj;
    }

    if(Array.isArray(obj)){
        let resultArray = [];
        for(let i in obj){
            let value = compactObject(obj[i]);
            if(Boolean(value)){
                resultArray.push(value);
            }
        }
        
        return resultArray;
    }

    const resultObject = {};

    for(const key in obj){
        let value = compactObject(obj[key]);
        if(Boolean(value)){
            resultObject[key] = value;
        }
    }

    return resultObject;

 */   
};

const obj = {"a": null, "b": [false, 1]};

console.log(compactObject(obj));