//Given a string s, find the length of the longest substring without repeating characters.
//Example 1:
//Input: s = "abcabcbb"
//Output: 3
//Explanation: The answer is "abc", with the length of 3.

//sliding window approach use 2 pointers! whenever a repeating character is found move the first pointer by 1

var lengthOfLongestSubstring = function (s) {
    var start = 0, maxLen = 0;
    var map = new Map();
    for (var i = 0; i < s.length; i++) {
        var ch = s[i];
        if (map.get(ch) >= start) start = map.get(ch) + 1;
        map.set(ch, i);
        if (i - start + 1 > maxLen) maxLen = i - start + 1;
    }
    return maxLen;
};






