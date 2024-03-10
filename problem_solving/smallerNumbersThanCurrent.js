/**
 * Below the code for find the smallest
 * number count using js
 * 
 * @author meganathan
 * 
 */

let smallerNumbersThanCurrent = function (nums) {

    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let currentNumber = nums[i]; // 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < currentNumber) { //  2 < 
                count++;
            }
        }
        res[i] = count;
    }
    return res;
}

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));