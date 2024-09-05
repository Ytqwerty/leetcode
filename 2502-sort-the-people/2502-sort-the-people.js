/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
   let array = []
   let result = []
   for (let i = 0;i<heights.length;i++) {
    array.push([names[i],heights[i]])
   }
   array.sort((a,b) => b[1] - a[1])
   for (let key of array) {
    result.push(key[0])
   }
   return result
};