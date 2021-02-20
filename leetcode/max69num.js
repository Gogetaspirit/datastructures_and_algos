//Given a positive integer num consisting only of digits 6 and 9.
//Return the maximum number you can get by changing at most one digit(6 becomes 9, and 9 becomes 6).

var maximum69Number = function (num) {
    let output = [num]
    let max;
    const numString = num.toString();
    const numArr = numString.split('');
    for (let i = 0; i < numArr.length; i++) {
        let dup = numArr.slice(0, numArr.length)
        if (numArr[i] === '6') {
            dup[i] = '9'
            output.push(dup.join(''))
        }
        if (numArr[i] === '9') {
            dup[i] = '6'
            output.push(dup.join(''))
        }
    }

    for (let j = 0; j < output.length; j++) {
        if (j === 0) {
            max = parseInt(output[j])
        }
        else {
            max = Math.max(max, parseInt(output[j]))
        }
    }

    return max
};