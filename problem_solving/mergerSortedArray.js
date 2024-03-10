/**
 * Below the code for merge the two array
 * in sorted way
 * 
 * @author meganathan
 */

let merge = function (nums1, m, nums2, n) {

    // Below the logic
    if (!nums1.length && m != 0 && !nums2.length && n != 0) {
        for (let i = 0; i < nums1.length - 1; i++) {
            if (nums1[i] <= nums2[i]) { // 1 < 2
                nums1[i + 1] = nums2[i];
            }


        }
    }

}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));