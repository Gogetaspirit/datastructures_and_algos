//Given two strings s and t, check if s is a subsequence of t.
//A subsequence of a string is a new string that is formed from the original string by deleting some(can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
//time complexity


var isSubsequence = function (s, t) {
    let i = 0;
    let m = 0;

    while (m < t.length) {
        if (s[i] === t[m]) {
            i++;
            m++;
        }
        else {
            m++;
        }
    }
    return i === s.length

};