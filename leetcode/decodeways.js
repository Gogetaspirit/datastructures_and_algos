//A message containing letters from A - Z can be encoded into numbers using the following mapping:

//'A' -> "1"
//'B' -> "2"
//...
//'Z' -> "26"

//To decode an encoded message, all the digits must be mapped back into letters using the reverse of the mapping above
//(there may be multiple ways).For example, "111" can have each of its "1"s be mapped into 'A's to make "AAA", or it could be mapped to "11" and "1"('K' and 'A' respectively) to make "KA".
//Note that "06" cannot be mapped into 'F' since "6" is different from "06".
//Given a non - empty string num containing only digits, return the number of ways to decode it.
//The answer is guaranteed to fit in a 32 - bit integer.

//memoization to optimize
let memo = new Map()
var numDecodings = function (s) {
    return recursiveWithMemo(0, s)
};
const recursiveWithMemo = (index, string) => {
    if (memo.has(index) === true) return memo.get(index)
    if (index === string.length) return 1;
    if (string[index] === '0') return 0;
    if (index === string.length - 1) return 1;
    let ans = recursiveWithMemo(index + 1, string);
    if (parseInt(string.slice(index, index + 2)) <= 26) {
        ans += recursiveWithMemo(index + 2, string);
    }
    memo.set(index, ans);
    return ans;
}
