


let sumIndicesWithKSetBits = function (nums, k) {

    if (nums.length > 0) {
        let totalCount = 0;
        for (let i = 0; i < nums.length; i++) {
            // remeber that .toString(2) -> convert the binary to number 
            let setBits = (i).toString(2).split('').filter(bit => bit === '1').length;
            if (setBits === k) {
                totalCount += nums[i];
            }
        }
        return totalCount;
    }
}
console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1));