//Given an array of integers nums and an integer k, 
//return the total number of continuous subarrays whose sum equals to k.
//Example 1:
//Input: nums = [1, 1, 1], k = 2
//Output: 2

var subarraySum = function (nums, k) {
    const map = new Map([[0, 1]]);
    let sum = 0;
    let total = 0;
    for (let num of nums) {
        sum = sum + num;
        total += (map.get(sum - k) || 0);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return total;
};






