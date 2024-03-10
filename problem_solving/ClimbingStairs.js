/**
 * @param {number} x
 * @return {number}
 * 
 * Below the code find the staris in
 * distinct ways using dynamic progamming   
 * @author meganathan
 */

let climbStairs = function (n) {
    if (n === 1) {
        return 1;
    }

    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
        console.log(dp[i]);
    }

    return dp[n];

}

console.log(climbStairs(4));