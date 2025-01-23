/* 
Que: or two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/


let gcdOfStrings = function(str1, str2) {

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    if (str1 + str2 !== str2 + str1) return "";

    const gcdLength = gcd(str1.length, str2.length);

    return str1.substring(0, gcdLength);
};

let str1 = "ABABAB";
let str2 = "ABAB";

console.log(gcdOfStrings(str1, str2)); // Output: "AB"
