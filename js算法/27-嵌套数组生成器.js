/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    arr = arr.flat()
    for (const item of arr) {
        if (item instanceof Array) {
           yield* inorderTraversal(item)
        }else{
            yield item
        }
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
const gen = inorderTraversal([[[[[]]]]]);
console.log(gen.next().value);
console.log(gen.next().done);