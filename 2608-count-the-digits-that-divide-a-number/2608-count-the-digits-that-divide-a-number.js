/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count= 0;
    for(let i=0;i<String(num).length;i++){
       if (num%String(num)[i]==0) {
        count++
       }
    }
    return count
};