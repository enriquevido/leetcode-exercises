var majorityElement = function(nums) {
    let elementMap = {};
    let higherElement = nums[0];
    let highest = 1;
    for(const element of nums){
        elementMap[element] = (elementMap[element] || 0) + 1;
        if (elementMap[element] > highest) {
            highest = elementMap[element];
            higherElement = element;
        }
    }
    return higherElement;
};