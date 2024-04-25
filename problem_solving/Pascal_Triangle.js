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
    let triangle = [[1]]; // [[1]]
    for (let i = 1; i < numRows; i++) { // i = 1 ; 1 < 5
        let prevRow = triangle[i - 1]; // triangle[ 1 - 1] = [1]
        console.log(prevRow);
        let newRow = []; // [1]
        newRow[0] = 1;
        console.log(newRow);
        for (let j = 1; j < prevRow.length; j++) { // 1 < 1 
            newRow[j] = prevRow[j - 1] + prevRow[j]; // [1] = [1 - 1] + prevRow[1]
        }
        newRow.push(1);
        console.log(newRow);
        triangle.push(newRow);git 
    }
    return triangle;
}

let numRows = 5;
let triangle = generatePascalsTriangle(numRows);
console.log(triangle);
