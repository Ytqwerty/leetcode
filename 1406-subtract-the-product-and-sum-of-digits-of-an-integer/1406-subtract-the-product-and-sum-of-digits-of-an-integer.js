/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let product = 1
    let result = 0
    let array = n.toString().split('').map(Number);
    for (let i = 0;i<array.length;i++) {
        sum+=array[i]
        product*=array[i]
    }
    result = product - sum
    return result
};