/**
 * @param {number} x
 * @return {number}
 * @author meganathan
 * Below the code for find the 
 * SQRT using binary search
 */
let mySqrt = function (x) {
    if (x === 0 || x === 1) return x;

    let left = 1;
    let right = Math.floor(x / 2); 
    let ans = 0;

    while (left <= right) { // 1 <= 4
        let mid = Math.floor((left + right) / 2);
        console.log("mid");
        console.log(mid);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
            ans = mid;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};

console.log(mySqrt(8));