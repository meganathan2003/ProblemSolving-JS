function findNeedleInHaystack(haystack, needle) {
    if (needle.length === 0) return 0;
    if (needle.length > haystack.length) return -1;

    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[j]) {
            j++;
            if (j === needle.length) {
                return i - j + 1; // 3 - 3 + 1;
            }
        } else {
            i -= j;
            j = 0;
        }
    }

    return -1;
}

console.log(findNeedleInHaystack("sadbutsad", "sad")); // Output: 0
console.log(findNeedleInHaystack("leetcode", "leeto")); // Output: -1
