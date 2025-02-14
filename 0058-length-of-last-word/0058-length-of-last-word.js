/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let array = s.trim().split(' ')
    let str = array[array.length-1];
    return str.length
};