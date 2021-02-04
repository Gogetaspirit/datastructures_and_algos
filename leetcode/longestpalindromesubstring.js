//Given a string s, return the longest palindromic substring in s.
//Example 1:
//Input: s = "babad"
//Output: "bab"
//Note: "aba" is also a valid answer.

var longestPalindrome = function (s) {
    
    if (s.length < 1 || s === null) return "";
    let longest = ""
    for (let i = 0; i < s.length; i++) {
        //aba
        //a string can have 2 centers, if its an odd number of letters it has one, 
        //if it has an even number of letters the two pointers point to separate letters
        let oddPalindrome = expandFromCenter(s, i, i)
        let evenPalindrome = expandFromCenter(s, i - 1, i)
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }
    return longest;
};
const expandFromCenter = (s, left, right) => {
    let i = 0;
    //while the pointer is not null and the two pointers equal eachother
    while (s[left - i] && s[left - i] === s[right + i]) {
        i++;
    }
    i--;
    return s.slice(left - i, right + i + 1)
}

//time complexity is n2 but space complexity is constant











