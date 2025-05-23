function twoSum(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];
}
;
console.log(twoSum([0, 3, 7, 2, 4, 6, 0, 8, 2, 5], 0));
