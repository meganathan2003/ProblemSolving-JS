/**
 * Below the code for solving the
 * pascal problem using js
 * 
 * @author meganathan
 * 
 * Input: numRows = 5
   Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 */

function generatePascalsTriangle(numRows) {
    if (numRows <= 0) return [];
    let triangle = [[1]];
    for (let i = 1; i < numRows; i++) {
        let prevRow = triangle[i - 1];
        let newRow = [];
        newRow[0] = 1;
        for (let j = 1; j < prevRow.length; j++) {
            newRow[j] = prevRow[j - 1] + prevRow[j];
        }
        newRow.push(1);
        triangle.push(newRow);
    }
    return triangle;
}

let numRows = 5;
let triangle = generatePascalsTriangle(numRows);
console.log(triangle);
