
/**
 *  Below the code for solve the number game
 * using js 
 * 
 * @param {*} nums 
 * @returns 
 */

var numberGame = function (nums) {
    let numb = nums.sort((a, b) => b - a)
    console.log(numb);
    let arr = []
    while (numb.length) {
        /**
         * Here pop method remove the last element and
         * replace the another one
         */
        let alice = numb.pop()
        let bob = numb.pop()
        arr.push(bob, alice)
    }
    return arr
}

console.log(numberGame([5, 4, 2, 3])); // Output: [3, 2, 5, 4]
