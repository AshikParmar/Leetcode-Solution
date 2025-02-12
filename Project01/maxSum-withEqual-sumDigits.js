/* 
Que:You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

Example 1:

Input: nums = [18,43,36,13,7]
Output: 54
Explanation: The pairs (i, j) that satisfy the conditions are:
- (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
- (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
So the maximum sum that we can obtain is 54.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumSum = function(nums) {
    const sumMap = new Map();
    let answer = -1;

    for(const num of nums){
        let sum = 0;
        let temp = num;
        while(temp>0){
            sum += temp%10;
            temp = Math.floor(temp/10);
        }

        if(sumMap.has(sum)){
            answer = Math.max(answer, sumMap.get(sum)+num);
            sumMap.set(sum, Math.max(sumMap.get(sum),num));
        }else{
            sumMap.set(sum,num);
        }
    }

    return answer;
};

const nums = [18,43,36,13,7];

console.log(maximumSum(nums));


/* time Complexity (O(n²))

var maximumSum = function(nums) {

    
    const digits = nums.map((num)=>{
        const ans = num.toString().split('').map(Number);

        const sum = ans.reduce((acc,arr)=> acc+arr,0);
        return sum;

    })

    const maxSum = [];

    for(let i=0; i<digits.length-1; i++){
        for(let j=i+1; j<digits.length; j++){
            
            if(digits[i]===digits[j]){
                maxSum.push(nums[i]+nums[j]);
            }
        }
    }

    return maxSum.length===0 ? -1 : Math.max(...maxSum);
};
*/