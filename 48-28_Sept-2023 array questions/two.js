//Write a Program to find that one element in a non-empty array of integers nums, where every element appears twice except for one.
// Example: 
//     Input: nums = [2,2,1]
//     Output: 1
var nums = [2, 2, 1, 1, 1, 2, 3];
function singleEle(nums) {
    for (var i = 0; i < nums.length; i++) {
        var count = 0;
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
            ;
        }
        if (count == 1) {
            return nums[i];
        }
    }
    return -1;
}
console.log(singleEle(nums));
