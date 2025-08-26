var removeDuplicates = function(nums) {
    let c = 0;
    for(let i = 1; i < nums.length; i++){
        if (nums[c] !== nums[i]){
            nums[c + 1] = nums[i];
            c++;
        }
    }
    return c + 1
};