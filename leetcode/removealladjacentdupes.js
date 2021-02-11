//Given a string s, a k duplicate removal 
//consists of choosing k adjacent and equal letters from s 
//and removing them causing the left and the right side of the deleted 
//substring to concatenate together.
//We repeatedly make k duplicate removals on s until we no longer can.
//Return the final string after all such duplicate removals have been made.
//It is guaranteed that the answer is unique.

var removeDuplicates = function (s, k) {
    const stack = [];
    for (let char of s) {
        if (stack.length && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1] += 1;
            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1]);
        }
    }
    let res = '';
    for (let [char, count] of stack) {
        res += char.repeat(count);
    }
    return res;
};