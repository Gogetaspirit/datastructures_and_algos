const longestSubstring = (str1, str2) => {
    let subStrings = [];
    let i;
    let j;
    for (i = 0; i < str1.length; i++) {
        for (j = i + 1; j < str1.length; j++) {
            subStrings.push(str1.slice(i, j + 1))
        }
    }

    let filteredSubStrings = [];
    subStrings.forEach((subString) => {
        if (str2.includes(subString) === true) {
            filteredSubStrings.push(subString)
        }
    })

    let longest = ""

    filteredSubStrings.forEach((subString) => {
        if (subString.length > longest.length) {
            longest = subString
        }
    })

    return longest;

}

console.log(longestSubstring('catbananasburgerking', 'dogshotdogsbananas'))

//recursion
const sumOfIntegers = (array) => {
//[1,2,3,4,5,6]
if (array.length < 1) return 0;
let lastEle = array.pop();
return sumOfIntegers(array) + lastEle
}

console.log(sumOfIntegers([1,2,3,4,5]))

//pairboarding