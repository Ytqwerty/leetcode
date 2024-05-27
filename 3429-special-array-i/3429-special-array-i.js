/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    let isEven = nums[0] % 2 == 0;
    for (let i = 1; i < nums.length; i++) {
        let temp = nums[i] % 2 == 0;
        isEven = !isEven;
        if (temp != isEven) return false;
    }
    return true;
};