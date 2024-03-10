/**
 * Below the code for solve the
 * running array in 1D array
 * 
 * @author meganathan
 * 
 */

let runningSum = function (nums) {
    /**
     * Input: nums = [1,2,3,4]
        Output: [1,3,6,10]
     */
    let arr = [nums[0]];
    for (let i = 1; i < nums.length ; i++) {
        arr[i] = nums[i] + arr[i - 1] // 1 - 1
    }
    return arr;


}

console.log(runningSum([1, 2, 3, 4]));