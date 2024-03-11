/**
 * Below the code for create a new
 * array based on index 
 * 
 * @author meganathan
 */

let createTargetArray = function (nums, index) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        /**
         * splice will remove the current index number 
         * and replace the indices properly it have many benifits
         * and it takes three parameters one is array second how many remove 
         * third index
         */
        res.splice(index[i], 0, nums[i]); 
        console.log(res);
    }
    return res;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));