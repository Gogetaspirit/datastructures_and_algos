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