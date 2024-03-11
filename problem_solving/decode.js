
/**
 * Below the code for solve the 
 * decode nums arr
 * @author meganathan
 */

let decode = function (encoded, first) {

    const len = encoded.length;
    const arr = [first];
    for(let i = 0; i < len; i++){
        arr.push(arr[i] ^ encoded[i]); // 1 ^ 1 = 0
    } 
    return arr;

}

console.log(decode([1, 2, 3], 1));