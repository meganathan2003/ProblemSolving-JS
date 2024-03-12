/**
 * Below the code for merge the two array
 * in sorted way
 * 
 * @author meganathan
 */

function merge(nums1, m, nums2, n) {
   
    /**
     * splice() method will remove the element in
     * the array and it take the index postion from 
     * start to end and  ... means spread operator 
     * it is the new feature of ES8 moudle it will concat
     * the two array
     */
    let merged = [...nums1.slice(0, m), ...nums2.slice(0, n)];

   
    merged.sort((a, b) => a - b);

    // Copy the sorted merged array back to nums1
    for (let i = 0; i < m + n; i++) {
        nums1[i] = merged[i];
    }
}

// Example usage
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]