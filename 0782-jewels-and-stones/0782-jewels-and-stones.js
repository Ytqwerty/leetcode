/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let key of jewels) {
        for (let j of stones){
            if (key===j) {
                count++
            }
        }
    }
    return count
};