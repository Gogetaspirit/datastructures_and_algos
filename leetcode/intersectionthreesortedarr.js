//Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, 
//return a sorted array of only the integers that appeared in all three arrays.
//Example 1:
//Input: arr1 = [1, 2, 3, 4, 5], arr2 = [1, 2, 5, 7, 9], arr3 = [1, 3, 4, 5, 8]
//Output: [1, 5]
//Explanation: Only 1 and 5 appeared in the three arrays.

var arraysIntersection = function (arr1, arr2, arr3) {
    let map = new Map();
    let output = []
    for (let i = 0; i < arr1.length; i++) {
        if (map.has(arr1[i]) === false) {
            map.set(arr1[i], 0)
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (map.has(arr2[j])) {
            map.set(arr2[j], map.get(arr2[j]) + 1)
        }
    }
    for (let k = 0; k < arr3.length; k++) {
        if (map.has(arr3[k])) {
            map.set(arr3[k], map.get(arr3[k]) + 1)
        }
    }
    for (let [key, value] of map) {
        if (map.get(key) === 2) output.push(key)
    }
    return output;
};