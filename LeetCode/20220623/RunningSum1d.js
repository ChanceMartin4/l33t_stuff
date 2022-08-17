/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let previous = 0;
    let numbers = [];
    
    
    
    for(let i = 0; i<nums.length; i++){
        previous+=nums[i];
        
        numbers.push(previous);
    }
    
    return numbers;
    
};

/*Could save memory by just doing nums[i] += Nums[i-1];*/