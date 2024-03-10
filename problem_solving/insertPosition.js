function searchInsert(nums, target) {

    if (!nums.length && target != 0) {
        for (let i = 0; i < nums.length; i++) {
            let currentNumber = nums[i];
            if (currentNumber - target === 1 || currentNumber - target === 0) {
                return i;
            }
        }
    } else {
       return "Please enter the input";
    }
    
}

console.log(searchInsert([1,3,5,6],7)); // output will be 1 return index