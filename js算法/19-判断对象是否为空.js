/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
   let len = 0
   for (const key in obj) {
    len++
   }
   return !Boolean(len)
};

console.log(isEmpty({"x": 5, "y": 42}));
console.log(isEmpty({}));