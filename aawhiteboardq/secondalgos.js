//fibs
//11235815
const fibSeq = (number) => {
    if (number === 0) return [];
    if (number === 1) return [1];
    if (number === 2) return [1, 1]

    let result = fibSeq(number - 1)
    let lastIdx = result.length - 1
    let resultingEle = result[lastIdx] + result[lastIdx - 1]
    result.push(resultingEle)
    return result;

}

// console.log(fibSeq(4))

const fibSeqSecond = (number) => {
    if (number === 0) return [];
    if (number === 1) return [1]
    if (number === 2) return [1,1]
    let arr = [1, 1];

    while (arr.length < number) {
        let lastIdx = arr.length - 1
       let resultingNum = arr[lastIdx] + arr[lastIdx - 1]
       arr.push(resultingNum)
    } 

    return arr;
}

// console.log(fibSeqSecond(2))

//takes string and return true if its a palindrome false if not

const isPalindrome = (string) => {
    //"anna" "anna" === true
    //'madam' 'madam' === true
    // 'yellow' 'wolley' === false
    let lastIdx = string.length  - 1;
    let i;
    let palin = false;
    for (i = 0; i < string.length; i++) {
        if (string[i] !== string[lastIdx]) {
            palin = false;
            break;
        }
        else {
            palin = true;
            lastIdx = lastIdx - 1;
        }
    }
    return palin;
}

