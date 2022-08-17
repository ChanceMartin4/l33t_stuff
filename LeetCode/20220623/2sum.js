/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*it is possible to brute force by going through the array, but that is n^2.
Using a map saves time and memory. Iterate through array checking to see if possible solution number exists in map*/

var twoSum = function(nums, target) {
    let scene = new Map();
    for(let i = 0; i<nums.length;i++){
        if(scene.has(target-nums[i]))
            return [scene.get(target-nums[i]), i];
        scene.set(nums[i],i);
    }
};