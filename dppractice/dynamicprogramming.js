// const canSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum]
//   if (targetSum === 0) return true;
//   if (targetSum < 0 ) return false;

//   for (let i = 0; i < numbers.length; i++) {
//     memo[targetSum] = canSum((targetSum - numbers[i]), numbers)
//     if (memo[targetSum] === true) {
//       return true;
//     }

//   }
//   return false;
// }

// console.log(canSum(7, [2, 3, 4]))


// const howSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum]
//   if (targetSum === 0) return [];
//   if (targetSum < 0 ) return null;
//   for (let i = 0; i < numbers.length; i++) {
//     let remainder = targetSum - numbers[i]
//     let res = howSum(remainder, numbers, memo)
//     if (res !== null) {
//       memo[targetSum] = [...res, numbers[i]]
//       return memo[targetSum]
//     }

//   }
//   memo[targetSum] = null
//   return null;
// }

// console.log(howSum(10000, [3,4]))


// const bestSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum]
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;
//   let shortestCombination = null;

//   for (let i = 0; i < numbers.length; i++) {
//     let newSum = targetSum - numbers[i]
//       let res = bestSum(newSum, numbers)
//       if (res !== null){
//        const combination = [...res, numbers[i]]
//        if (shortestCombination === null || combination.length < shortestCombination.length) {
//          shortestCombination = combination
//        }
//       }
//   }
//   memo[targetSum] = shortestCombination
//   return shortestCombination
// }

// console.log(bestSum(7, [2,3,4,7]))

const canConstruct = (word, arrWords, str = '') => {
    if (str === word) return true;
    if (str.length > word.length) return false;

    for (let i = 0; i < arrWords.length; i++) {
        let partWord = str + arrWords[i]
        let result = canConstruct(word, arrWords, partWord);
        if (result === true) {
            return true
        }
    }
    return false;
}

console.log(canConstruct('skateboard', ['bo', 'd', 'ate', 't', 'ska', 'sk', 'boar']))