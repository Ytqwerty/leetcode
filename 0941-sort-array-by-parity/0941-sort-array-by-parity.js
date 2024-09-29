/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let arr1 = []
    let arr2 = []
    for(let num of nums){
        if(num%2 == 0){
            arr1.push(num)
        } else {
            arr2.push(num)
        }
    }
    return [...arr1,...arr2]
};