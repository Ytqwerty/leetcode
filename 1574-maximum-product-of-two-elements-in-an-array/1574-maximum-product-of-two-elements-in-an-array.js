/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
 let max1 = 0;
    let max2 = 0;

    for (let num of nums) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else {
            max2 = Math.max(max2, num);
        };
    };
    
    return (max1-1) * (max2-1);
}