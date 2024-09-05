/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum1=0;
    for(let i=0;i<nums.length;i++){
        sum1+=nums[i]
    }
    let str = nums.join('')
    let sum2=0
    for(i=0;i<str.length;i++){
        sum2+=parseInt(str[i])
    }
    return sum1-sum2;
};