//Given an array of positive integers arr, calculate the sum of all possible odd - length subarrays.
//A subarray is a contiguous subsequence of the array.
//Return the sum of all odd - length subarrays of arr.

var sumOddLengthSubarrays = function (arr) {
    let res = 0, n = arr.length
    for (let i = 0; i < n; ++i) {
        res += parseInt(((i + 1) * (n - i) + 1) / 2) * arr[i];
    }
    return res
};

//runs in O(n) time