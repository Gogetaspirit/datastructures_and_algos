//Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? 
//Find all unique triplets in the array which gives the sum of zero.
//Notice that the solution set must not contain duplicate triplets.

var threeSum = function (nums) {
    var rtn = [];

    //need to find triplets so if less than 3 return empty array
    if (nums.length < 3) {
        return rtn;
    }

    //sort for least to greatest to use negative numbers as pivots
    nums = nums.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < nums.length - 2; i++) {
        
        //cant use positive integers as pivot because j and k will be indexs after the pivot which are positive.
        //positive integers cannot be added with positive to equal 0
        if (nums[i] > 0) {
            return rtn;
        }

        //skip duplicate numbers to make sure its unique easy to do so because its sorted
        //dont wanna use same pivot
        if (i > 0 && nums[i] == nums[i - 1]) {
            //continue allows it to go into next iteration
            continue;
        }


        for (var j = i + 1, k = nums.length - 1; j < k;) {
            //if the 3 values are equal 
            if (nums[i] + nums[j] + nums[k] === 0) {
                rtn.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                //make sure no duplicates
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
                //make sure no duplicates
                while (j < k && nums[k] == nums[k + 1]) {
                    k--;
                }
                //if result is greater than 0 decrease the value of k
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
                //if result is less than 0 increase the value of j
            } else {
                j++;
            }
        }
    }
    return rtn;
};