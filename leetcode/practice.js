//twoSum problem with O(n) time complexity.

const twoSum = function (nums, target) {
    let map = new Map();
    for (i = 0; i < nums.length; i++) {
        let otherNum = target - nums[i]
        if (map.has(otherNum)) {
            return [map.get(otherNum), i]
        }
        map.set(nums[i], i)
    }
}

//Add Two Numbers
//You are given two non-empty linked lists representing two non-negative integers. 
//The digits are stored in reverse order, and each of their nodes contains a single digit. 
//Add the two numbers and return the sum as a linked list.
//You may assume the two numbers do not contain any leading zero, except the number 0 itself.


const addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let current = new ListNode(0);
    let result = current;
    while (l1 || l2) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        current.next = new ListNode(sum % 10);
        current = current.next;
        sum = sum > 9 ? 1 : 0;
    }
    if (sum) {
        current.next = new ListNode(sum);
    }
    return result.next;
};


//Merge Intervals
//Given an array of intervals where intervals[i] = [starti, endi], 
//merge all overlapping intervals, and return an array of the non-overlapping intervals 
//that cover all the intervals in the input.

var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]]
    for (let curr of intervals) {
        prev = res[res.length - 1]
        if (prev[1] >= curr[0]) {
            prev[1] = Math.max(curr[1], prev[1])
        } else {
            res.push(curr)
        }
    }
    return res
};

//Given an array nums of n integers where n > 1, 
//return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
//without division

var productExceptSelf = function (nums) {
    const result = [];
    let productSoFar = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = productSoFar
        productSoFar *= nums[i]
    }
    productSoFar = 1
    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] *= productSoFar
        productSoFar *= nums[j]
    }
    return result;
};