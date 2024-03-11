
/**
 * 
 * @param {*} sentences
 * Below the code for find the most sententes in the 
 * array
 * @author meganathan 
 */
let mostWordsFound = function (sentences) {

    if (sentences.length != 0) {
        let wordCount = 0;
        for (let i = 0; i < sentences.length; i++) {
            let currentWords = sentences[i];
            let count = currentWords.split(" ").length;
            if (count > wordCount) {
                wordCount = count;
            }
        }
        return wordCount;
    }

}
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
