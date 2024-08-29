/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let flagArr = []
    for (let i = 0; i < mat.length; i++) {
        let oneCount = 0;
        for (let j = 0; j < mat[i].length; j++) {
           if(mat[i][j] === 1) oneCount++;
        }
        flagArr[i] = oneCount;
    }
    const max = Math.max(...flagArr)
    return [flagArr.indexOf(max),max]
};

console.log(rowAndMaximumOnes([[0,0],[1,1],[0,0]]));