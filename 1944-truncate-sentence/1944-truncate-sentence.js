/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let arr = s.split(' ') ;
    let arr2 = []
    for (let i = 0; i<k;i++) {
        arr2.push(arr[i])
    } 
    return arr2.join(' ')
};