var containsDuplicate = function(nums) {
    /*let map = new Map():
    nums.sort();
    let count = 0;
    
    for(int i = 0; i<length; i++){
        if(i<0 && nums[i]<nums[i-1]){
            count = 0;
        }
        
        if()
    }

    Could iterate through sorted array, nlogn
    easier to just shove intoa set and check if same legth as array.*/

    const set = new Set(nums);
    return set.size !== nums.length;
};